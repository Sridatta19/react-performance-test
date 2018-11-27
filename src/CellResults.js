import React from "react";
import {unstable_createResource} from 'react-cache';
const classNames = require("classnames");

const Resource  = unstable_createResource((random) => new Promise(resolve => {
  setTimeout(() => {
    return resolve(Math.floor(random/100))
  }, random);
}));

const CellResults = () => {
  const options = Resource.read(Math.floor(Math.random() * 500));
  var classes = classNames({
    "good-results": options > 3,
    "weak-results": options > 1 && options <= 3,
    "bad-results": options >= 0 && options <= 1
  });

  return (
    <td className="hour-cell">
      <div className={classes}>
        <div>{options}</div>
        <div className="result-label">results</div>
      </div>
    </td>
  );
};

export default CellResults;
