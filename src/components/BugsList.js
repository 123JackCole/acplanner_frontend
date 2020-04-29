import React from "react";
import Bug from "./Bug";

const BugsList = ({ bugs }) => {
  const items = bugs.map(bg => (
    <Bug
      key={bg.id}
      bug={bg}
    />
  ));
  return (
    <div>
      <div className="ui unstackable items">{items}</div>
    </div>
  );
};

export default BugsList;