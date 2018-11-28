import React from "react";
import { useState, useEffect } from 'react';

const CellResults = React.lazy(() => import('./CellResults'));

const PlaceHolder = () => {
  return (
    <td className="hour-cell">
      <div className="searching">...</div>
    </td>
  );
};

const CalendarCell = (props) => {
  let [isSearching, setSearch] = useState(false);
  useEffect(() => {
    if(props.searchCells) setSearch(true)
  }, [props.searchCells])
  if (isSearching) {
    return <React.Suspense fallback={<PlaceHolder />}>
      <CellResults {...props} />
    </React.Suspense>
  }
  return (
    <td className="hour-cell">
      <div className="time">{props.hour}:00</div>
    </td>
  );
}

export default CalendarCell;
