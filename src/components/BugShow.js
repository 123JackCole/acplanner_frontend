import React from "react";
import { Link } from "react-router-dom";

const BugShow = ({ bug }) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={bug.image} alt={bug.name} />
        </div>
        <div className="content">
          <div className="header">{bug.name}</div>
          {bug.scientific_name !== "N/A" ? (
            <div className="meta">Scientific name: {bug.scientific_name}</div>
          ) : null}
          {bug.family !== "N/A" ? (
            <div className="meta">Scientific family: {bug.family}</div>
          ) : null}
          <div className="description">
            {bug.location !== "N/A" ? <p>Location: {bug.location}</p> : null}
            {bug.price !== "N/A" ? <p>Price: {bug.price}</p> : null}
            {bug.time_day !== "N/A" ? <p>Time: {bug.time_day}</p> : null}
            {bug.time_year !== "N/A" ? <p>Season: {bug.time_year}</p> : null}
            {bug.size !== "N/A" ? <p>Size: {bug.size}</p> : null}
            {bug.rarity !== "N/A" ? <p>Rarity: {bug.rarity}</p> : null}
          </div>
        </div>
      </div>
      <Link to="/bugs" className="ui primary button">
        <i className="left arrow icon" />
        Back
      </Link>
    </div>
  );
};

export default BugShow;