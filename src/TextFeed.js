import React, { Component } from 'react';
import './TextFeed.css';
import { GameWorldContext } from './GameWorldContext';

class TextFeed extends Component {
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ activityFeed }) => (
                    <div className="TextFeed">
                        {activityFeed}
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default TextFeed;
