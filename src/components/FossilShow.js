import React from "react";
import { Link } from "react-router-dom";

const FossilShow = ({ fossil }) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={fossil.image} alt={fossil.name} />
        </div>
        <div className="content">
          <div className="header">{fossil.name}</div>
          {fossil.scientific_name !== "N/A" ? (
            <div className="meta">
              Scientific name: {fossil.scientific_name}
            </div>
          ) : null}
          <div className="description">
            {fossil.price !== "N/A" ? <p>Price: {fossil.price}</p> : null}
            {fossil.sections !== "N/A" ? <p>Sections: {fossil.sections}</p> : null}
            {fossil.period !== "N/A" ? <p>Period: {fossil.period}</p> : null}
            {fossil.length !== "N/A" ? <p>Size: {fossil.length}</p> : null}
          </div>
        </div>
      </div>
      <Link to="/fossils" className="ui primary button">
        <i className="left arrow icon" />
        Back
      </Link>
    </div>
  );
};

export default FossilShow;
