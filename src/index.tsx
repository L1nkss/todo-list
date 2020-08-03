import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

const App = () => {
  return (
    <div className="todo-app">
      <div className="app-header">
        <h1 className="app-header__title">Todo List</h1>
        <h2 className="app-header__task-count">3 осталось, 1 выполнен</h2>
      </div>
      <div className="top-panel">
        <input type="text" placeholder="Поиск..." className="input"/>
        <div className="button-group">
            <button type="button" className="button button--active">Все</button>
            <button type="button" className="button button--grey">Активные</button>
            <button type="button" className="button button--grey">Выполненные</button>
        </div>
      </div>
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
    <form className="add-item-form">
        <input type="text" placeholder="Что нужно сделать?" className="input" />
        <button className="button button--grey">Добавить</button>
    </form>
    </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
