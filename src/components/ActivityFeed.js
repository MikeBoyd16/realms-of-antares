import React from "react";

// Import custom scrollbar library
import OverlayScrollbars from "overlayscrollbars";
import "overlayscrollbars/css/OverlayScrollbars.css";

// Import game context
import { GameWorldContext } from '../GameWorldContext';

// Import ActivityFeed component styles
import '../appStyles.css';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.osTargetRef = React.createRef();
  }

  componentDidMount() {
    this.osInstance = OverlayScrollbars(this.osTargetRef.current, this.props.options || {}, this.props.extensions);
  }

  componentWillUnmount() {
    if (this.osInstance && this.osInstance.destroy) this.osInstance.destroy();
  }

  render() {
    return (
      <GameWorldContext.Consumer>
        {({ activityFeed }) => (
          <div {...this.props} ref={this.osTargetRef} id="activityFeed">
            <div id="notifications">
              {
                activityFeed.map((notification) => <div className="notification">{notification}</div>)
              }
              {this.props.children}
            </div>
          </div>
        )}
      </GameWorldContext.Consumer>
    );
  }
}

export default ActivityFeed;