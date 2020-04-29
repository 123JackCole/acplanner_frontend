import React from "react";
import { Link } from "react-router-dom";

const FishShow = ({ fish }) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={fish.image} alt={fish.name} />
        </div>
        <div className="content">
          <div className="header">{fish.name}</div>
          {fish.scientific_name !== "N/A" ? (
            <div className="meta">Scientific name: {fish.scientific_name}</div>
          ) : null}
          {fish.family !== "N/A" ? (
            <div className="meta">Scientific family: {fish.family}</div>
          ) : null}
          <div className="description">
            {fish.location !== "N/A" ? <p>Location: {fish.location}</p> : null}
            {fish.price !== "N/A" ? <p>Price: {fish.price}</p> : null}
            {fish.time_day !== "N/A" ? <p>Time: {fish.time_day}</p> : null}
            {fish.time_year !== "N/A" ? <p>Season: {fish.time_year}</p> : null}
            {fish.size !== "N/A" ? <p>Size: {fish.size}</p> : null}
            {fish.shadow !== "N/A" ? <div>{fish.shadow}</div> : null}
            {fish.rarity !== "N/A" ? <p>Rarity: {fish.rarity}</p> : null}
          </div>
        </div>
      </div>
      <Link to="/fish" className="ui primary button">
        <i className="left arrow icon" />
        Back
      </Link>
    </div>
  );
};

export default FishShow;
