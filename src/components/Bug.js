import React from "react";
import { Link } from "react-router-dom";

const Bug = (props) => {
  return (
    <div className="card">
      <div className="">
        <img src={props.bug.image} alt={props.bug.name} />
      </div>
      <div className="">
        {props.bug.name !== 'N/A' ? <div>{props.bug.name}</div> : null}
        {props.bug.location !== 'N/A' ? <div>{props.bug.location}</div> : null}
        {props.bug.price !== 'N/A' ? <div>{props.bug.price}</div> : null}
        {props.bug.time_day !== 'N/A' ? <div>{props.bug.time_day}</div> : null}
        {props.bug.time_year !== 'N/A' ? <div>{props.bug.time_year}</div> : null}
        <div className="">
          <div className="">
            <Link
              to={`/bugs/${props.bug.name}`}
              className=""
            >
              <i className="" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bug;