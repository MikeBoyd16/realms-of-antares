import React from "react";

// Import game context
import { GameWorldContext } from '../GameWorldContext';

// Import ActivityFeed component styles
import '../appStyles.css';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
  }
  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <GameWorldContext.Consumer>
        {({ activityFeed }) => (
          <div id="activityFeed">
            <div id="notifications">
              {
                activityFeed.map((notification, i) => <div key={i} className="notification">{notification}</div>)
              }
              <div ref={this.messagesEnd}></div>
            </div>
          </div>
        )}
      </GameWorldContext.Consumer>
    );
  }
}

export default ActivityFeed;