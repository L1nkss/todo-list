import AppHeader from "@components/app-header/app-header";
import TopPanel from "@components/top-panel/top-panel";
import TodoList from "@components/todo-list/todo-list";
import AddItemForm from "@components/add-item-form/add-item-form";

import './style/style.scss';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <TopPanel />
            <TodoList />
            <AddItemForm />
        </div>
    )
};

export default App;
