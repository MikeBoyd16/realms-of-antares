import React, { Component } from 'react';
import './ActionButton.css';
import { GameWorldContext } from './GameWorldContext';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: this.props.actionName,
            actionValue: this.props.actionValue,
            actionMessage: this.props.actionMessage
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorld, activityFeed, updateDisplay }) => (
                    <div>
                        <button className="button btnBorder btnLightBlue" onClick={() => 
                            updateDisplay({...gameWorld[this.state.actionValue]}, (activityFeed + this.state.actionMessage))}>
                            {this.state.actionName}</button>
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default ActionButton;
