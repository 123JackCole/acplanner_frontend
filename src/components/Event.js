import React from "react";

const Event = (props) => {
  let images = [];
  if (props.images) {
    images = props.images.map((image) => {
      return <img src={image} alt={props.event} key={image}></img>;
    });
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <hr />
        <div className="text-center">
          {props.event}
          <br></br>
          {images}
        </div>
      </div>
    </div>
  );
};

export default Event;
