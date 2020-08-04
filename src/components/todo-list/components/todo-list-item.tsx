import {TTodoItem} from "@components/app/app";

interface ITodoListItem {
    item: TTodoItem,
    onClickCallback: (type: 'important' | 'done', id: number) => void,
    deleteItem: (id: number) => void
}

const TodoListItem = (props: ITodoListItem) => {
  let className = 'todo-list__item';
  const {done, important, id, label} = props.item;

  if (done) {
      className += ' done';
  }

  if (important) {
      className += ' important'
  }
  return (
      <li className={className}>
          <span
              className="todo-list__item-label"
              onClick={() => props.onClickCallback('done', id)}
          >
              {label}
          </span>
          <div className="flex">
              <button type="button" className="button button--danger button--small" onClick={() => props.deleteItem(id)}>
                  <i className="fa fa-trash-o" />
              </button>
              <button
                  type="button"
                  className="button button--success button--small"
                  onClick={() => props.onClickCallback('important', id)}
              >
                  <i className="fa fa-exclamation" />
              </button>
          </div>
      </li>
  )
};

export default TodoListItem;
