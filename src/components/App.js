import React, { Component } from 'react';

// Import components
import TitleMenu from './TitleMenu';
import CharacterCreation from './CharacterCreation';
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
  changeScreen = (screen) => {
    this.setState({ screen });
  }
  changeLocation = location => {
    this.setState({ location });
  }
  updateActivityFeed = (activityFeed) => {
    this.setState({ activityFeed });
  }
  manageDisplay = (location, actionMessage, arrivalMessage, activityFeed) => {
    // Set the new location
    this.changeLocation(location);

    // Display the action message
    activityFeed.push(actionMessage);
    this.updateActivityFeed(activityFeed);

    // Display the arrival message after 3 seconds
    setTimeout(() => {
      activityFeed.push(arrivalMessage);
      this.setState({ activityFeed });
    }, 3000);
  }
  updateScreen = () => {
    if(this.state.screen === "TitleMenu") {
      return(<TitleMenu />);
    } else if(this.state.screen === "CharacterCreation") {
      return(<CharacterCreation />);
    }
  }
  state = {
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    currentNotification: locations["Riverstar"]["message"],
    activityFeed: [locations["Riverstar"]["message"]],
    changeScreen: this.changeScreen,
    updateScreen: this.updateScreen,
    changeLocation: this.changeLocation,
    displayArrivalMessage: this.displayArrivalMessage,
    updateActivityFeed: this.updateActivityfeed,
    manageDisplay: this.manageDisplay,
    screen: "TitleMenu"
  };
  componentDidUpdate(prevState) {
    if(prevState.screen !== this.state.screen) {

    }
  }
  
  render() {
    return (
      <GameWorldContext.Provider value={this.state}>
        <div id="components">
				  {this.updateScreen()}
        </div>
      </GameWorldContext.Provider>
    );
  }
}

export default App;
