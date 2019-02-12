import React, { Component } from 'react';
import './App.css';
import ActionBar from './ActionBar';
import Panel from './Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Panel child={<ActionBar />} color="red" />
          <Panel child={<ActionBar />} color="yellow" />
      </div>
    );
  }
}

export default App;
