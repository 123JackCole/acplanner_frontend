import React from "react";
import { Link } from "react-router-dom";

const VillagerShow = ({ villager }) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={villager.image} alt={villager.name} />
        </div>
        <div className="content">
          <div className="header">{villager.name}</div>
          {villager.gender !== "N/A" ? <div>{villager.gender}</div> : null}
          {villager.personality !== "N/A" ? (
            <div>{villager.personality}</div>
          ) : null}
          {villager.species !== "N/A" ? <div>{villager.species}</div> : null}
          {villager.birthday !== "N/A" ? <div>{villager.birthday}</div> : null}
          <div className="description">
            {villager.quote !== "N/A" ? (
              <p>Quote: {villager.quote}</p>
            ) : null}
            {villager.sign !== "N/A" ? <p>Sign: {villager.sign}</p> : null}
            {villager.phrase !== "N/A" ? (
              <p>Phrase: {villager.phrase}</p>
            ) : null}
            {villager.clothes !== "N/A" ? (
              <p>Clothes: {villager.clothes}</p>
            ) : null}
            {villager.picture !== "N/A" ? <p>Picture: <img src={villager.picture} alt={villager.name} /></p> : null}
            {villager.shadow !== "N/A" ? <div>{villager.shadow}</div> : null}
            {villager.siblings !== "N/A" ? (
              <p>Siblings: {villager.siblings}</p>
            ) : null}
            {villager.goal !== "N/A" ? (
              <p>Goal: {villager.goal}</p>
            ) : null}
            {villager.fear !== "N/A" ? (
              <p>Fear: {villager.fear}</p>
            ) : null}
            {villager.favclothing !== "N/A" ? (
              <p>Favorite Clothing: {villager.favclothing}</p>
            ) : null}
            {villager.leastfavclothing !== "N/A" ? (
              <p>Hated Clothes: {villager.leastfavclothing}</p>
            ) : null}
            {villager.favcolor !== "N/A" ? (
              <p>Favorite Color: {villager.favcolor}</p>
            ) : null}
          </div>
        </div>
      </div>
      <Link to="/villagers" className="ui primary button">
        <i className="left arrow icon" />
        Back
      </Link>
    </div>
  );
};

export default VillagerShow;
