import React from "react";
import { Link } from "react-router-dom";

const Fish = (props) => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.fish.image} alt={props.fish.name} />
      </div>
      <div className="middle aligned content">
        {props.fish.name !== "N/A" ? <div>{props.fish.name}</div> : null}
        {props.fish.location !== "N/A" ? (
          <div>{props.fish.location}</div>
        ) : null}
        {props.fish.price !== "N/A" ? <div>{props.fish.price}</div> : null}
        {props.fish.time_day !== "N/A" ? (
          <div>{props.fish.time_day}</div>
        ) : null}
        {props.fish.time_year !== "N/A" ? (
          <div>{props.fish.time_year}</div>
        ) : null}
        {props.fish.shadow !== "N/A" ? (
          <div>{props.fish.shadow}</div>
        ) : null}
        <div className="extra">
          <div className="ui big buttons">
            <Link
              to={`/fish/${props.fish.name}`}
              className="ui basic blue button"
            >
              <i className="add circle icon" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fish;
