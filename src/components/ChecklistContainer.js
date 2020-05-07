import React, { Component } from "react";
import { api } from "../services/api";
import Task from "./Task";

class Checklist extends Component {
  constructor(props) {
    super();

    this.state = {
      tasks: [],
      checked: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    let checked = [...this.state.checked];
    checked[index][event.target.name] = !checked[index][event.target.name];

    this.setState({
      checked: checked,
    });

    let checklist = { ...this.props.checklist, checked_statuses: checked };

    api.checklists.putChecklist(checklist);
  }

  componentDidMount() {
    api.tasks.getTasks(this.props.checklist["id"]).then((data) => {
      if (this.props.checklist.checked_statuses === []) {
        let array = data.map((task) => {
          let innerArray = [];
          for (let i = 0; i < task.num_of_boxes; i++) {
            innerArray.push(false);
          }
          return innerArray;
        });

        this.setState({
          checked: array,
        });
      } else {
        this.setState({
          checked: this.props.checklist.checked_statuses,
        });
      }

      let tasks = data.map((task, index) => {
        return (
          <Task
            message={task.name}
            num_of_boxes={task.num_of_boxes}
            key={index}
            name={index}
            onClick={this.handleClick}
            checked={this.state.checked[index]}
          />
        );
      });

      this.setState({
        tasks: tasks,
      });
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.tasks}</h4>
      </div>
    );
  }
}

export default Checklist;
