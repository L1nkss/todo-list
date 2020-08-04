import './style/style.scss';

const AddItemForm = () => {
    return (
        <form className="add-item-form">
            <input type="text" placeholder="Что нужно сделать?" className="input" />
            <button className="button button--grey">Добавить</button>
        </form>
    )
};

export default AddItemForm;
