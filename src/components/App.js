import React, { Component } from 'react';
import {GameWorldContext} from '../context/GameWorldContext';

// Data
import game from '../data/game.json';
import locations from '../data/location.json';
import character from '../data/character.json';

// Components
import TitleMenu from './TitleMenu';
import CharacterCreation from './CharacterCreation';
import Navigation from './Navigation';
import CharacterSheet from './CharacterSheet';
import ActivityFeed from './ActivityFeed';
import ActionBar from './ActionBar';

// Styles
import '../css/App.css';

class App extends Component {
  /* 
   * SCREEN 
   */
  changeScreen = (screen) => {
    this.setState({ screen });
  }
  updateScreen = () => {
    if(this.state.screen === "TitleMenu") {
      return(<TitleMenu />);
    } else if(this.state.screen === "CharacterCreation") {
      return(<CharacterCreation />);
    } else if(this.state.screen === "Story") {
      return(
        <>
            <Navigation />
            <ActivityFeed/>
            <ActionBar />
        </>
      );
    } else if(this.state.screen === "Character") {
      return(
        <>
            <Navigation />
            <CharacterSheet/>
        </>
      );
    }
  }

  /*
   * CHARACTER CREATION
   */
  setPlayerName = (playerName) => {
    this.setState({ playerName: playerName });
  }
  setAttributeSelection = (buttonType, value) => {
    if(buttonType === "playerClass") {
      this.setState({ playerClass: value });
    } else if (buttonType === "playerProficiency") {
      this.setState({ playerProficiency: value });
    } else {
      console.log("Error: Unable to set player attribute during character creation.");
    }
  }
  startGame = () => {
    var player = this.state.player;
    player["Name"] = this.state.playerName;
    player["Class"] = this.state.playerClass;
    player["Attributes"] = game["Class Presets"]["Attributes"][this.state.playerClass];
    player["Skills"] = game["Class Presets"]["Skills"][this.state.playerClass];
    player["Skills"][this.state.playerProficiency] = String(parseInt(player["Skills"][this.state.playerProficiency]) + 1);
    this.setState({ player });
    this.changeScreen("Story");
  }

  /*
   * LOCATION
   */
  changeLocation = location => {
    this.setState({ location });
  }

  /*
   * Story
   */
  updateActionMessage = (actionMessage) => {
    this.setState({ actionMessage });
  }
  manageDisplay = (location) => {
    this.changeLocation(location);
  }

  state = {
    // Screen
    screen: "TitleMenu",
    changeScreen: this.changeScreen,
    updateScreen: this.updateScreen,

    // Character Creation
    playerName: "",
    playerClass: "",
    playerProficiency: "",
    setPlayerName: this.setPlayerName,
    setAttributeSelection: this.setAttributeSelection,
    startGame: this.startGame,

    // Location
    gameWorldLocations: locations,
    location: locations["Branch1"],
    changeLocation: this.changeLocation,

    // Story
    activityFeed: locations["Branch1"]["message"],
    actionMessage: " ",
    updateActionMessage: this.updateActionMessage,
    manageDisplay: this.manageDisplay,

    // Player
    game: game,
    player: character,
  };
  
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
