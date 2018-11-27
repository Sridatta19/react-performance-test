import React from "react";
import logo from './logo.svg';
import CalendarCell from "./CalendarCell";
import { useState } from 'react';

const Calendar = () => {
  const [searchCells, searchAll] = useState(0);
  const [isLoaded, load] = useState(false);
  const DAYS = Array.apply(null, { length: 32 }).map(
    (_, index) => `Oct ${index}`
  );
  return (
    <div className="flex">
      <img src={logo} className="App-logo" alt="logo" />
      {!isLoaded && (
        <button className="btn" onClick={() => load(true)}>
          Load
        </button>
      )}
      {isLoaded && (
        <>
          <button className="btn" onClick={() => searchAll(searchCells + 1)}>
            Search all month
          </button>
          <table>
            <tbody>
              <tr>
                {DAYS.map((day, index) => (
                  <th
                    className="day-header"
                    key={"th" + index}
                  >
                    {day}
                  </th>
                ))}
              </tr>
              {Array.apply(null, { length: 24 }).map((_, index) => (
                <tr key={"tr" + index}>
                  {DAYS.map((day, index) => (
                    <CalendarCell
                      searchCells={searchCells}
                      hour={index}
                      day={day}
                      key={"cell" + index}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Calendar;
