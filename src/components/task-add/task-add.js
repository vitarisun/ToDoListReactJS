import { Component } from 'react';

import './task-add.css';

class TaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      // note: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //значение инпута которое было внутри элемента
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.task || this.state.task.length < 3) return;
    this.props.onAdd(this.state.task);
    this.setState({
      name: '',
    });
  };

  render() {
    const { task } = this.state;
    return (
      <div className="task-add" onSubmit={this.onSubmit}>
        <h3>Добавьте новую задачу</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Введите новую задачу"
            name="task"
            value={task}
            onChange={this.onValueChange}
          />
          {/* <input
            type="text"
            className="form-control new-post-label"
            // placeholder="Примичание"
            name="note"
            value={note}
            onChange={this.onValueChange}
          /> */}

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default TaskAdd;
