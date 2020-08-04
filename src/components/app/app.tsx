import AppHeader from "@components/app-header/app-header";
import TopPanel from "@components/top-panel/top-panel";
import TodoList from "@components/todo-list/todo-list";
import AddItemForm from "@components/add-item-form/add-item-form";

import './style/style.scss';

export type TTodoItem = {
    label: string,
    important: boolean
    done: boolean,
    id: number
}

export type TFilters = 'All' | 'Active' | 'Done';

type TAppState = {
    todos: Array<TTodoItem>,
    activeFilter: TFilters,
    searchString: string
}

export default class App extends React.Component<{}, TAppState> {
    private idCount: number;

    constructor(props: {}) {
        super(props);
        this.idCount = 125;
        this.state = {
            todos: [],
            searchString: '',
            activeFilter: 'All'
        };
        this.changeFilterStatus = this.changeFilterStatus.bind(this);
        this.changeItemStatus = this.changeItemStatus.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.searchItems = this.searchItems.bind(this);
        this.changeSearchString = this.changeSearchString.bind(this);
    }

    addItem(name: string): void {
        const item = {label: name, important: false, done: false, id: this.idCount++};
        this.setState((state) => {
            return {
                todos: [...state.todos, item]
            }
        })
    }

    changeSearchString(label: string): void {
        this.setState({searchString: label});
    }

    searchItems(name: string, items: Array<TTodoItem>): Array<TTodoItem> {
        if (name === '') {
            return items;
        }
        return items.filter((element) => {
            const targetValue = name.toLowerCase();

            return element.label.includes(targetValue);
        });
    }

    changeFilterStatus(type: TFilters): void {
        this.setState(() => ({activeFilter: type}))
    }

    changeItemStatus(type: 'important' | 'done', id: number): void {
        const idx = this.state.todos.findIndex((element) => element.id === id);
        const newItem = {...this.state.todos[idx], [type]: !this.state.todos[idx][type]};
        this.setState((state) => {
            return {
                todos: [...state.todos.slice(0, idx), newItem, ...state.todos.slice(idx + 1)]
            }
        })
    }

    deleteItem(id: number): void {
        const idx = this.state.todos.findIndex((element) => element.id === id);
        this.setState((state) => {
            return {
                todos: [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)]
            }
        })
    }

    getFilteredItems(): Array<TTodoItem> {
        const filter: string = this.state.activeFilter;

        switch (filter) {
            case "Active":
                return this.state.todos.filter((item) => !item.done);
            case "Done":
                return this.state.todos.filter((item) => item.done);
            default:
                return this.state.todos;
        }
    }
    render() {
        const doneItems = this.state.todos.filter((element) => element.done).length;
        const activeItems = this.state.todos.length - doneItems;
        const itemsToShow = this.searchItems(this.state.searchString, this.getFilteredItems());

        return (
            <div className="app">
                <AppHeader done={doneItems} active={activeItems} />
                <TopPanel changeFilterStatus={this.changeFilterStatus} activeButton={this.state.activeFilter} changeSearchString={this.changeSearchString} />
                <TodoList todos={itemsToShow} changeItemStatus={this.changeItemStatus} deleteItem={this.deleteItem}  />
                <AddItemForm addItem={this.addItem} />
            </div>
        )
    }
};
