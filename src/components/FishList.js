import React from "react";
import Fish from "./Fish";

const FishList = ({ fishes }) => {
  const items = fishes.map(fsh => (
    <Fish
      key={fsh.id}
      fish={fsh}
    />
  ));
  return (
    <div>
      <div className="ui unstackable items">{items}</div>
    </div>
  );
};

export default FishList;