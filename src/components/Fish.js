import React from "react";
import { Link } from "react-router-dom";

const Fish = (props) => {
  return (
    <div className="card rounded mb-4 box-shadow h-100">
      <img
        className="card-img-top"
        src={props.fish.image}
        alt={props.fish.name}
      />
      <div className="card-body d-flex flex-column">
        {props.fish.name !== "N/A" ? <h4>{props.fish.name}</h4> : null}
        {props.fish.location !== "N/A" ? (
          <div>Location: {props.fish.location}</div>
        ) : null}
        {props.fish.price !== "N/A" ? (
          <div>Price: {props.fish.price}</div>
        ) : null}
        {props.fish.time_day !== "N/A" ? (
          <div>Time: {props.fish.time_day}</div>
        ) : null}
        {props.fish.time_year !== "N/A" ? (
          <div>Months: {props.fish.time_year}</div>
        ) : null}
        {props.fish.shadow !== "N/A" ? (
          <div>Shadow: {props.fish.shadow}</div>
        ) : null}
        {/* <button className="mt-auto btn btn-sm btn-block btn-outline-info "> */}
        <Link
          to={`/fish/${props.fish.name}`}
          className="mt-auto btn btn-sm btn-block btn-outline-info"
        >
          More Info
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Fish;
