
import './task-list-item.css';

const TaskListItem = (props) => {

    const { task, onDelete, onToggleProp, complete, chief } = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (complete) {
      classNames += ' complete';
    }
    if (chief) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle="chief">
          {task}
        </span>
        {/* <input
        type="text"
        className="list-group-item-input"
        defaultValue={commit}
      /> */}
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-exclamation btn-sm"
            onClick={onToggleProp}
            data-toggle="complete"
          >
            <i className="fa-solid fa-circle-exclamation"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
}

export default TaskListItem;
