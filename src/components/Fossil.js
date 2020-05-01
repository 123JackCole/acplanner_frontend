import React from "react";
import { Link } from "react-router-dom";

const Fossil = (props) => {
  return (
    <div className="card">
      <div className="">
        <img src={props.fossil.image} alt={props.fossil.name} />
      </div>
      <div className="">
        {props.fossil.name !== "N/A" ? <div>{props.fossil.name}</div> : null}
        {props.fossil.price !== "N/A" ? <div>{props.fossil.price}</div> : null}
        <div className="">
          <div className="">
            <Link
              to={`/fossils/${props.fossil.name}`}
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

export default Fossil;
