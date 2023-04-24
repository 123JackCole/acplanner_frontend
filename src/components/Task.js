import React from "react";

function Task(props) {
  let text = props.message;

  let boxes = [];
  for (let i = 0; i < props.num_of_boxes; i++) {
    boxes.push(
      <input
        key={i}
        name={i}
        type="checkbox"
        defaultChecked={props.checked ? props.checked[i] : false}
        onClick={(event) => props.onClick(event, props.name)}
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

export default Task;
