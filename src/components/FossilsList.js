import React from "react";
import Fossil from "./Fossil";

// const FossilsList = ({ fossils }) => {
//   const items = fossils.map(fos => (
//     <Fossil
//       key={fos.id}
//       fossil={fos}
//     />
//   ));
//   return (
//     <div>
//       <div className="ui unstackable items">{items}</div>
//     </div>
//   );
// };

const FossilsList = ({ fossils }) => {
  const rows = [Math.ceil(fossils.length / 4)];

  const fossilRows = [];
  for (let i = 0; i < rows; i++) {
    fossilRows.push(...fossils.slice(i * 4, i * 4 + 4));
  }

  const content = fossilRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((fossil) => {
        if (fossil !== null) {
          return (
            <div key={fossil.id} className="col-md-3">
              <Fossil key={fossil.id} fossil={fossil} />
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

export default FossilsList;
