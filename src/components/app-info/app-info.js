
import './app-info.css';

const AppInfo = ({task, chief}) => {
return (
  <div className="app-info">
    <h1>Список текущих дел  </h1>
    <h2>Общее задач задач: {task}</h2>
    <h2>Количество важных задач: {chief}</h2>


  </div>
)
}

export default AppInfo;