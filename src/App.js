import React, { Component } from 'react';
import './App.css';
import Panel from './Panel';
import ActionBar from './ActionBar';
import TextFeed from './TextFeed';

class App extends Component {
  render() {
    return (
      <div className="Panel-wrapper">
          <Panel children={<TextFeed />} />
          <Panel children={<ActionBar />} classes="lines" />
      </div>
    );
  }
}

export default App;
