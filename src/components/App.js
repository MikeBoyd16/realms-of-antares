import React, { Component } from 'react';

// Import components
import Navigation from './Navigation';
import CharacterStatus from './CharacterStatus';
import ActivityFeed from './TextFeed';
import ActionBar from './ActionBar';
import DialogueBar from './DialogueBar';

// Import game contect and data
import {GameWorldContext} from '../GameWorldContext';
import data from '../data.json';

// Import App component styles
import '../css/App.css';

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
        <div id="components">
				  <Navigation />
          <CharacterStatus />
          <ActivityFeed options={{scrollbars: {visibility: "hidden"}}}/>
          <ActionBar />
          <DialogueBar />
        </div>
      </GameWorldContext.Provider>
    );
  }
}

export default App;
