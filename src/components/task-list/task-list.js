import TaskListItem from '../task-list-item/task-list-item';
import './task-list.css';

const TaskList = ({ data, onDelete, onToggleChief, onToggleComplete }) => {
  //для перебора массива используем метод map т.к. он возвращает новый массив элементов
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      // <TaskListItem task={item.task} commit={item.commit} />
      // <TaskListItem {...item} />
      <TaskListItem
      key={id} {...itemProps}
      onDelete={() => onDelete(id)}
      onToggleComplete={() => onToggleComplete(id)}
      onToggleChief={() => onToggleChief(id)}

      />
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
      {/* <TaskListItem task="task 1" commit="Примечание 1" />
      <TaskListItem task="task 2" commit="Примечание 2" />
      <TaskListItem task="task 3" commit="Примечание 3" /> */}
    </ul>
  );
};

export default TaskList;
