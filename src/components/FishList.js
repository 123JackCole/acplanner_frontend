import React from "react";
import Fish from "./Fish";

// const FishList = ({ fishes }) => {
//   const items = fishes.map(fsh => (
//     <Fish
//       key={fsh.id}
//       fish={fsh}
//     />
//   ));
//   return (
//     <div>
//       <div className="ui unstackable items">{items}</div>
//     </div>
//   );
// };

const FishList = ({ fishes }) => {
  const rows = [Math.ceil(fishes.length / 4)];

  const fishRows = [];
  for (let i = 0; i < rows; i++) {
    fishRows.push(...fishes.slice(i * 4, i * 4 + 4));
  }

  const content = fishRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((fish) => {
        if (fish !== null) {
          return (
            <div key={fish.id} className="col-md-3">
              <Fish key={fish.id} fish={fish} />
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

export default FishList;