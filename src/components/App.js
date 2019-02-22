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
  }
  updateActivityFeed = (activityFeed) => {
    this.setState({ activityFeed });
  }
  updateDisplay = (location, actionMessage, arrivalMessage, activityFeed) => {
    this.changeLocation(location);
    activityFeed.push(actionMessage);
    this.updateActivityFeed(activityFeed);
    setTimeout(() => {
      activityFeed.push(arrivalMessage);
      this.setState({ activityFeed });
    }, 3000);
  }
  state = {
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    currentNotification: locations["Riverstar"]["message"],
    activityFeed: [locations["Riverstar"]["message"]],
    changeLocation: this.changeLocation,
    displayArrivalMessage: this.displayArrivalMessage,
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
