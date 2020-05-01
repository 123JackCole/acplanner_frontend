import React from "react";
import { Link } from "react-router-dom";

const Villager = (props) => {
  return (
    <div className="card">
      <div className="">
        <img src={props.villager.image} alt={props.villager.name} />
      </div>
      <div className="">
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
        <div className="">
          <div className="">
            <Link
              to={`/villagers/${props.villager.name}`}
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

export default Villager;
