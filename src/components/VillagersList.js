import React from "react";
import Villager from "./Villager";

// const VillagersList = ({ villagers }) => {
//   const items = villagers.map(vil => (
//     <Villager
//       key={vil.id}
//       villager={vil}
//     />
//   ));
//   return (
//     <div>
//       <div className="ui unstackable items">{items}</div>
//     </div>
//   );
// };

const VillagersList = ({ villagers }) => {
  const rows = [Math.ceil(villagers.length / 4)];

  const villagerRows = [];
  for (let i = 0; i < rows; i++) {
    villagerRows.push(...villagers.slice(i * 4, i * 4 + 4));
  }

  const content = villagerRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((villager) => {
        if (villager !== null) {
          return (
            <div key={villager.id} className="col-md-3">
              <Villager key={villager.id} villager={villager} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  ));
  return <div>{content}</div>;
};

export default VillagersList;