import React from "react";
import Fossil from "./Fossil";

const FossilsList = ({ fossils }) => {
  const items = fossils.map(fos => (
    <Fossil
      key={fos.id}
      fossil={fos}
    />
  ));
  return (
    <div>
      <div className="ui unstackable items">{items}</div>
    </div>
  );
};

export default FossilsList;