import React, { Component } from 'react';
import './App.css';
import Panel from './Panel';
import ActionBar from './ActionBar';

class App extends Component {
  render() {
    return (
      <div className="Panel-wrapper">
          <Panel child={<ActionBar />} />
          <Panel child={<ActionBar />} />
      </div>
    );
  }
}

export default App;
