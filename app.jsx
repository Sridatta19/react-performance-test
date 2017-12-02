require('./style.css');

const _ = require('lodash');
const EventEmitter = require('events');
const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');

var DAYS = _.range(1, 32).map((day) => ("Oct " + day));

var randomMilliseconds = function() {
  return Math.floor(Math.random() * 500);
}

class Cell extends React.Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.clicked = this.clicked.bind(this);

    this.state = {
      isSearching: false,
      searchResults: null
    };
  }

  render() {
    if (this.state.isSearching) {
      return (
        <td className='hour-cell'>
          <div className='searching'>
            ...
          </div>
        </td>
      );
    } else if (this.state.searchResults) {
      var options = this.state.searchResults.options;
      var classes = classNames({
        'good-results': options > 3,
        'weak-results': options > 1 && options <= 3,
        'bad-results' : options >= 0 && options <= 1
      });
      
      return (
        <td className='hour-cell' onClick={this.clicked}>
          <div className={classes}>
            <div>{this.state.searchResults.options}</div>
            <div className="result-label">results</div>
          </div>
        </td>
      );
    } else {
      return (
        <td className='hour-cell' onClick={this.clicked}>
          <div className='time'>
            {this.props.hour}:00
          </div>
        </td>
      );
    }
  }

  clicked() {
    this.search();
  }

  search() {
    
    this.setState({
      isSearching: true,
      searchResults: {options: null}
    });

    setTimeout(() => {
      this.setState({
        isSearching: false,
        searchResults: {options: Math.floor(Math.random() * 5)}
      });
    }, randomMilliseconds());
  }

  componentWillMount() {
    this.props.events.on('search', () => this.search());
  }
}

class Calendar extends React.Component {
  
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
    this.load = this.load.bind(this);
    this.searchAll = this.searchAll.bind(this);

    this.state = {
      isLoaded: false
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ||
          <button className='btn' onClick={this.load}>Load</button>}
        {this.state.isLoaded &&
          <button className='btn' onClick={this.searchAll}>Search all month</button>}
        {this.state.isLoaded &&
          <table>
            <tbody>
              <tr>
                {DAYS.map((day, index) => (
                  <th className='day-header' onClick={this.clicked} key={'th' + index}>{day}</th>
                ))}
              </tr>
              {_.range(24).map((hour, index) => (
                <tr key={'tr' + index}>
                  {DAYS.map((day, index) => (
                    <Cell hour={hour} day={day} key={day} events={this.events} key={'cell' + index} />
                  ))}
                </tr>
              ))}
            </tbody>
         </table>
        }
      </div>
    );
  }

  componentWillMount() {
    this.events = new EventEmitter();
    this.events.setMaxListeners(0);
  }

  load() {
    this.setState({isLoaded: true});
  }

  searchAll(args) {
    this.events.emit('search');
  }
}

ReactDOM.render(<Calendar/>, document.getElementById('root'));