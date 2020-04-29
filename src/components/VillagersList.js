import React from "react";
import Villager from "./Villager";

const VillagersList = ({ villagers }) => {
  const items = villagers.map(vil => (
    <Villager
      key={vil.id}
      villager={vil}
    />
  ));
  return (
    <div>
      <div className="ui unstackable items">{items}</div>
    </div>
  );
};

export default VillagersList;