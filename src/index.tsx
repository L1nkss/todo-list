import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="todo-app">
      <div className="app-header">
        <h1>Todo List</h1>
        <h2>3 осталось, 1 выполнен</h2>
      </div>
    <div className="top-panel">
        <input type="text" placeholder="Поиск..." />
        <div>
            <button type="button">Все</button>
            <button type="button">Активные</button>
            <button type="button">Выполненные</button>
        </div>
    </div>
    <ul className="todo-list list-group">
        <li className="list-group__item">
            <span>Drink Coffee</span>
            <button type="button">Удалить</button>
            <button type="button">Важность</button>
        </li>
        <li className="list-group__item">
            <span>Make Awesome  App</span>
            <button type="button">Удалить</button>
            <button type="button">Важность</button>
        </li>
        <li className="list-group__item">
            <span>Have a lunch</span>
            <button type="button">Удалить</button>
            <button type="button">Важность</button>
        </li>
    </ul>
    <form className="add-item-form">
        <input type="text" placeholder="Что нужно сделать?" />
        <button>Добавить</button>
    </form>
    </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
