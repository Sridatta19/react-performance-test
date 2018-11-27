import React from "react";
import classNames from "classnames";

function randomMilliseconds() {
  return Math.floor(Math.random() * 500);
}

const PlaceHolder = () => {
  return (
    <td className="hour-cell">
      <div className="searching">...</div>
    </td>
  );
};

const CellResults = ({ options }) => {
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

export default class Cell extends React.Component {
  state = {
    isSearching: false,
    searchResults: undefined
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.searchCells !== this.props.searchCells ||
      nextState.isSearching !== this.state.isSearching ||
      (nextState.searchResults.options &&
        nextState.searchResults.options !== this.state.searchResults.options)
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchCells !== this.props.searchCells) {
      this.setState({
        isSearching: true,
        searchResults: { options: undefined }
      });
      setTimeout(() => {
        this.setState({
          isSearching: false,
          searchResults: { options: Math.floor(Math.random() * 5) }
        });
      }, randomMilliseconds());
    }
  }

  render() {
    if (this.state.searchResults && this.state.searchResults.options !== undefined) {
      return <CellResults options={this.state.searchResults.options}/>
    }
    if (this.state.isSearching) {
      return <PlaceHolder/>
    }
    return (
      <td className="hour-cell" onClick={this.clicked}>
        <div className="time">{this.props.hour}:00</div>
      </td>
    );
  }
}
