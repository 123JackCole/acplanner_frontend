import React from "react";
import { Link } from "react-router-dom";

const Bug = (props) => {
  return (
    <div class="card rounded mb-4 box-shadow h-100">
      <img
        className="card-img-top"
        src={props.bug.image}
        alt={props.bug.name}
      />
      <div className="card-body d-flex flex-column">
        {props.bug.name !== "N/A" ? (
          <h4 className="card-title">{props.bug.name}</h4>
        ) : null}
        {props.bug.location !== "N/A" ? (
          <p className="card-text">Location: {props.bug.location}</p>
        ) : null}
        {props.bug.price !== "N/A" ? (
          <p className="card-text">Price: {props.bug.price}</p>
        ) : null}
        {props.bug.time_day !== "N/A" ? (
          <p className="card-text">Time: {props.bug.time_day}</p>
        ) : null}
        {props.bug.time_year !== "N/A" ? (
          <p className="card-text">Months: {props.bug.time_year}</p>
        ) : null}
        {/* <button className="mt-auto btn btn-sm btn-block btn-outline-info "> */}
        <Link
          to={`/bugs/${props.bug.name}`}
          className="mt-auto btn btn-sm btn-block btn-outline-info"
        >
          More Info
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Bug;
