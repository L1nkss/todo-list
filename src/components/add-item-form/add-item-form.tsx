import './style/style.scss';

interface IAddItemForm {
    addItem: (name: string) => void
}

export default class AddItemForm extends React.Component<IAddItemForm, {}> {
    private inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IAddItemForm) {
        super(props);
        this.inputRef = React.createRef();
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(evt: React.FormEvent): void {
        evt.preventDefault();
        const value = this.inputRef.current.value;
        if (value !== '') {
            this.props.addItem(value);
            this.inputRef.current.value = '';
        }
    }

    render() {
        return (
            <form className="add-item-form">
                <input ref={this.inputRef} type="text" placeholder="Что нужно сделать?" className="input" />
                <button className="button button--grey" onClick={this.handleButtonClick}>Добавить</button>
            </form>
        )
    }
}
