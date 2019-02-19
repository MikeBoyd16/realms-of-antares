import React, { Component } from 'react';
import '../css/App.css';
import Panel from './Panel';
import ActionBar from './ActionBar';
import TextFeed from './TextFeed';
import {GameWorldContext} from '../GameWorldContext';
import data from '../data.json';

class App extends Component {
  changeLocation = location => {
    this.setState({ location });
  };
  updateActivityFeed = (activityFeed) => {
    this.setState({ activityFeed });
  }
  updateDisplay = (location, activityFeed) => {
    this.changeLocation(location);
    this.updateActivityFeed(activityFeed);
    this.activityNotificationIncrement(this.activityNotificationCount);
  }
  activityNotificationIncrement = (activityNotificationCount) => {
    this.setState({ activityNotificationCount: activityNotificationCount + 1 })
  }
  state = {
    gameWorld: data,
    location: data["Riverstar"],
    currentNotification: data["Riverstar"]["message"],
    activityFeed: [data["Riverstar"]["message"]],
    activityNotificationCount: 0,
    changeLocation: this.changeLocation,
    updateActivityFeed: this.updateActivityfeed,
    updateDisplay: this.updateDisplay
  };
  render() {
    return (
      <GameWorldContext.Provider value={this.state}>
        <div className="Panel-wrapper">
            <Panel children={<TextFeed options={{scrollbars: {visibility: "hidden"}}}/>} classes="feed" />
            <Panel children={<ActionBar location={this.state.location} />} classes="actions" />
        </div>
      </GameWorldContext.Provider>
    );
  }
}

export default App;
