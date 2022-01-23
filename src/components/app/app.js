import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/searсh-panel';
import TaskAdd from '../task-add/task-add';
import TaskList from '../task-list/task-list';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { task: 'task 1', complete: false, chief: true, id: 1 },
        { task: 'task 2', complete: true, chief: false, id: 2 },
        { task: 'task 3', complete: false, chief: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addTask = (task) => {
    const newTask = {
      task,
      complete: false,
      chief: false,
      id: genID(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newTask];
      return {
        data: newArr,
      };
    });
  };

  onToggleComplete = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, complete: !item.complete}
        }
        return item;
      })
    }))
  }

  onToggleChief = (id) => {
    console.log(`Chief this ${id}`);
  }



  render() {
    const task = this.state.data.length;
    const chief = this.state.data.filter(item => item.chief).length;
    return (
      <div className="app">
        <AppInfo task={task} chief={chief} />
        <TaskAdd onAdd={this.addTask} />
        <div className="searсh-panel">
          <SearchPanel />
          <TaskList data={this.state.data} onDelete={this.deleteItem}
          onToggleComplete={this.onToggleComplete}
          onToggleChief={this.onToggleChief}
          />
          <AppFilter />
        </div>
      </div>
    );
  }
}

function genID() {
  return Math.floor(Math.random() * 100000);
}

export default App;
