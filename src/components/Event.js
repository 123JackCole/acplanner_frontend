import React, { useState } from "react";

const Event = (props) => {
  const [images, setImages] = useState([]);

  if (props.images) {
    setImages(
      props.images.map((image) => (
        <img src={image} alt={props.event} key={image} />
      ))
    );
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <hr />
        <div className="text-center">
          {props.event}
          <br />
          {images}
        </div>
      </div>
    </div>
  );
};

export default Event;
