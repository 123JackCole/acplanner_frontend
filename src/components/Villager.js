import React from "react";
import { Link } from "react-router-dom";

const Villager = (props) => {
  return (
    <div className="card rounded mb-4 box-shadow h-100">
      <img
        className="card-img-top img-responsive-villager"
        src={props.villager.image}
        alt={props.villager.name}
      />
      <div className="card-body d-flex flex-column">
        {props.villager.name !== "N/A" ? <h4>{props.villager.name}</h4> : null}
        {props.villager.gender !== "N/A" ? (
          <div>Gender: {props.villager.gender}</div>
        ) : null}
        {props.villager.personality !== "N/A" ? (
          <div>Personality: {props.villager.personality}</div>
        ) : null}
        {props.villager.species !== "N/A" ? (
          <div>Species: {props.villager.species}</div>
        ) : null}
        {props.villager.birthday !== "N/A" ? (
          <div>Birthday: {props.villager.birthday}</div>
        ) : null}
        {/* <button className="mt-auto btn btn-sm btn-block btn-outline-info "> */}
        <Link
          to={`/villagers/${props.villager.name}`}
          className="mt-auto btn btn-sm btn-block btn-outline-info"
        >
          More Info
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Villager;
