import React, { Component } from 'react';
import './App.css';
import Panel from './Panel';
import ActionBar from './ActionBar';

class App extends Component {
  render() {
    return (
      <div className="Panel-wrapper">
          <Panel children={[<ActionBar />, <ActionBar />]} lines="no" />
          <Panel children={<ActionBar />} lines="yes" />
      </div>
    );
  }
}

export default App;
