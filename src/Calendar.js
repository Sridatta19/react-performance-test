import React, { Component } from "react";
import logo from './logo.svg';
import CalendarCell from "./CalendarCell";

class Calendar extends Component {
  state = {
    isLoaded: false,
    searchCells: 0,
    cells: []
  };

  load = () => {
    this.setState({ isLoaded: true });
  };

  searchAll = () => {
    this.setState({ searchCells: this.state.searchCells + 1 });
  };

  render() {
    const DAYS = Array.apply(null, { length: 32 }).map(
      (_, index) => `Oct ${index}`
    );
    return (
      <div className="flex">
        <img src={logo} className="App-logo" alt="logo" />
        {!this.state.isLoaded && (
          <button className="btn" onClick={this.load}>
            Load
          </button>
        )}
        {this.state.isLoaded && (
          <>
            <button className="btn" onClick={this.searchAll}>
              Search all month
            </button>
            <table>
              <tbody>
                <tr>
                  {DAYS.map((day, index) => (
                    <th
                      className="day-header"
                      onClick={this.clicked}
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
                        searchCells={this.state.searchCells}
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
}

export default Calendar;
