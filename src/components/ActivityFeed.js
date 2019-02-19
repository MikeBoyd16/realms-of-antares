import React from "react";

// Import custom scrollbar library
import OverlayScrollbars from "overlayscrollbars";
import "overlayscrollbars/css/OverlayScrollbars.css";

// Import game context
import { GameWorldContext } from '../GameWorldContext';

// Import ActivityFeed component styles
import '../css/ActivityFeed.css';

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
          <div {...this.props} ref={this.osTargetRef} className="feedWrapper">
            <div className="TextFeed">
              {this.props.children}
              {
                activityFeed.map((notification) => <div>{notification}</div>)
              }
            </div>
          </div>
        )}
      </GameWorldContext.Consumer>
    );
  }
}

export default ActivityFeed;