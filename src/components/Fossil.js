import React from "react";
import { Link } from "react-router-dom";

const Fossil = (props) => {
  return (
    <div className="card rounded mb-4 box-shadow h-100">
      {props.fossil.image ? (
        <img
          className="card-img-top img-responsive-fossil"
          src={props.fossil.image}
          alt={props.fossil.name}
        />
      ) : null}
      <div className="card-body d-flex flex-column">
        {props.fossil.name !== "N/A" ? <h4>{props.fossil.name}</h4> : null}
        {props.fossil.price !== "N/A" ? (
          <div>Price: {props.fossil.price}</div>
        ) : null}
        {/* <button className="mt-auto btn btn-sm btn-block btn-outline-info "> */}
        <Link
          to={`/fossils/${props.fossil.name}`}
          className="mt-auto btn btn-sm btn-block btn-outline-info"
        >
          More Info
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Fossil;
