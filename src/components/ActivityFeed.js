import React from "react";
import { GameWorldContext } from '../context/GameWorldContext';

// Styles
import '../css/ActivityFeed.css';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 0
    }
    this.renderMessage = this.renderMessage.bind(this);
    this.incrementDelay = this.incrementDelay.bind(this);
    this.resetDelay = this.resetDelay.bind(this);
  }
  renderMessage(location) {
    var characters = location["message"].split('');
    console.log(location["name"]);
    return (
      <div id="message">
      {
        characters.map((character, idx) => 
          <span key={location["name"] + String(idx)} 
                id="character" 
                style={{animationDelay: this.incrementDelay()}}>
                {character}
          </span>
        )
      }
      {this.resetDelay()}
      </div>
    );
  }
  incrementDelay() {
    this.state.delay = this.state.delay + 0.05;
    return String(this.state.delay) + "s";
  }
  resetDelay() {
    this.state.delay = 0;
  }
  render() {
    return (
      <GameWorldContext.Consumer>
      {({ location }) => (
        <div id="activityFeed">
          {this.renderMessage(location)}
        </div>
      )}
      </GameWorldContext.Consumer>
    );
  }
}

export default ActivityFeed;