import React from "react";
import OverlayScrollbars from "overlayscrollbars";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { GameWorldContext } from './GameWorldContext';
import './TextFeed.css';

class TextFeed extends React.Component {
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
          <div {...this.props} ref={this.osTargetRef} className="TextFeed">
            {this.props.children}
            {activityFeed}
          </div>
        )}
      </GameWorldContext.Consumer>
    );
  }
}

export default TextFeed;