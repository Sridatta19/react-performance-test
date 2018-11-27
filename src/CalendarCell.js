import React from "react";
const CellResults = React.lazy(() => import('./CellResults'));

const PlaceHolder = () => {
  return (
    <td className="hour-cell">
      <div className="searching">...</div>
    </td>
  );
};

export default class Cell extends React.Component {
  state = {
    isSearching: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.searchCells !== this.props.searchCells ||
      nextState.isSearching !== this.state.isSearching
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchCells !== this.props.searchCells) {
      this.setState({
        isSearching: true
      });
    }
  }

  render() {
    if (this.state.isSearching) {
      return <React.Suspense fallback={<PlaceHolder/>}>
        <CellResults />
      </React.Suspense>
    }
    return (
      <td className="hour-cell">
        <div className="time">{this.props.hour}:00</div>
      </td>
    );
  }
}
