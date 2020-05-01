import React from "react";
import Bug from "./Bug";

const BugsList = ({ bugs }) => {
  const rows = [Math.ceil(bugs.length / 4)];

  const bugRows = [];
  for (let i = 0; i < rows; i++) {
    bugRows.push(...bugs.slice(i * 4, i * 4 + 4));
  }

  const content = bugRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((bug) => {
        if (bug !== null) {
          return (
            <div key={bug.id} className="col-md-3">
              <Bug key={bug.id} bug={bug} />
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

export default BugsList;
