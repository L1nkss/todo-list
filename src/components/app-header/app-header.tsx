import './style/style.scss';

const AppHeader = (): React.ReactElement => {
  return (
      <div className="app-header">
          <h1 className="app-header__title">Todo List</h1>
          <h2 className="app-header__task-count">3 осталось, 1 выполнен</h2>
      </div>
  )
};


export default AppHeader;
