import './style/style.scss';

const TodoList = () => {
    return (
        <ul className="todo-list list-group">
            <li className="todo-list__item">
                <span className="todo-list__item-label">Поспать</span>
                <div className="flex">
                    <button type="button" className="button button--danger button--small"><i className="fa fa-trash-o"></i></button>
                    <button type="button" className="button button--success button--small"><i className="fa fa-exclamation"></i></button>
                </div>
            </li>
            <li className="todo-list__item">
                <span className="todo-list__item-label">Сделать todo list</span>
                <div className="flex">
                    <button type="button" className="button button--danger button--small"><i className="fa fa-trash-o"></i></button>
                    <button type="button" className="button button--success button--small"><i className="fa fa-exclamation"></i></button>
                </div>
            </li>
        </ul>
    )
};

export default TodoList;
