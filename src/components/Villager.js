import React from "react";
import { Link } from "react-router-dom";

const Villager = (props) => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.villager.image} alt={props.villager.name} />
      </div>
      <div className="middle aligned content">
        {props.villager.name !== "N/A" ? (
          <div>{props.villager.name}</div>
        ) : null}
        {props.villager.gender !== "N/A" ? (
          <div>{props.villager.gender}</div>
        ) : null}
        {props.villager.personality !== "N/A" ? (
          <div>{props.villager.personality}</div>
        ) : null}
        {props.villager.species !== "N/A" ? (
          <div>{props.villager.species}</div>
        ) : null}
        {props.villager.birthday !== "N/A" ? (
          <div>{props.villager.birthday}</div>
        ) : null}
        <div className="extra">
          <div className="ui big buttons">
            <Link
              to={`/villagers/${props.villager.name}`}
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

export default Villager;
