import React, { Component } from 'react';
import './App.css';
import Panel from './Panel';
import ActionBar from './ActionBar';
import TextFeed from './TextFeed';
import {GameWorldContext} from './GameWorldContext';
import data from './data.json';

class App extends Component {
  changeLocation = location => {
    this.setState({ location });
  };
  state = {
    gameWorld: data,
    location: data["Riverstar"],
    changeLocation: this.changeLocation
  };
  render() {
    return (
      <GameWorldContext.Provider value={this.state}>
        <div className="Panel-wrapper">
            <Panel children={<TextFeed />} />
            <Panel children={<ActionBar location={this.state.location} />} classes="lines" />
            console.log(this.state.location);
        </div>
      </GameWorldContext.Provider>
    );
  }
}

export default App;
