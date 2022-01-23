import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-outline-success" type="button">
        Все задачи
      </button>
      <button className="btn btn-outline-warning" type="button">
        Важные задачи
      </button>
      <button className="btn btn-outline-info" type="button">
        Завершенные задачи
      </button>
    </div>
  );
};
export default AppFilter;
