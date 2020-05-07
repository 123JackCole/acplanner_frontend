import React, { Component } from "react";

class Task extends Component {

  render() {
    let text = this.props.message;

    let boxes = [];
    for (let i = 0; i < this.props.num_of_boxes; i++) {
      boxes.push(
        <input
          key={i}
          name={i}
          type="checkbox"
          defaultChecked={this.props.checked[i]}
          onClick={(event) => this.props.onClick(event, this.props.name)}
        />
      );
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <hr />
          <div className="text-center">
            {text}
            <br></br>
            {boxes}
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
