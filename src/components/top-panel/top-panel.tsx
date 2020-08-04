import './style/style.scss';

const TopPanel = (): React.ReactElement => {
    return (
        <div className="top-panel">
            <input type="text" placeholder="Поиск..." className="input"/>
            <div className="button-group">
                <button type="button" className="button button--active">Все</button>
                <button type="button" className="button button--grey">Активные</button>
                <button type="button" className="button button--grey">Выполненные</button>
            </div>
        </div>
    )
};

export default TopPanel;
