import React from "react";
import { Link } from "react-router-dom";

const Fossil = (props) => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.fossil.image} alt={props.fossil.name} />
      </div>
      <div className="middle aligned content">
        {props.fossil.name !== "N/A" ? <div>{props.fossil.name}</div> : null}
        {props.fossil.price !== "N/A" ? <div>{props.fossil.price}</div> : null}
        <div className="extra">
          <div className="ui big buttons">
            <Link
              to={`/fossils/${props.fossil.name}`}
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

export default Fossil;
