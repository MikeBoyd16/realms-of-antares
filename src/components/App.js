import React, { Component } from 'react';

// Import components
import Navigation from './Navigation';
import CharacterStatus from './CharacterStatus';
import ActivityFeed from './ActivityFeed';
import ActionBar from './ActionBar';
import DialogueBar from './DialogueBar';

// Import game contect and data
import {GameWorldContext} from '../GameWorldContext';
import locations from '../locations.json';

// Import App component styles
import '../appStyles.css';

class App extends Component {
  changeLocation = location => {
    this.setState({ location });
  };
  updateActivityFeed = (activityFeed) => {
    this.setState({ activityFeed });
  }
  updateDisplay = (location, notification, activityFeed) => {
    this.changeLocation(location);
    activityFeed.push(notification);
    this.updateActivityFeed(activityFeed);
    this.activityNotificationIncrement(this.activityNotificationCount);
  }
  activityNotificationIncrement = (activityNotificationCount) => {
    this.setState({ activityNotificationCount: activityNotificationCount + 1 })
  }
  state = {
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    currentNotification: locations["Riverstar"]["message"],
    activityFeed: [locations["Riverstar"]["message"]],
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
          <ActivityFeed/>
          <ActionBar />
          <DialogueBar />
        </div>
      </GameWorldContext.Provider>
    );
  }
}

export default App;
