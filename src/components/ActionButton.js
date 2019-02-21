import React, { Component } from 'react';
import '../css/ActionButton.css';
import { GameWorldContext } from '../GameWorldContext';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: this.props.actionName,
            actionValue: this.props.actionValue,
            actionMessage: this.props.actionMessage,
            classes: this.props.classes
        }
        this.createButton = this.createButton.bind(this);
    }
    createButton(gameWorld, activityFeed, updateDisplay) {
        if(this.state.classes.includes("disabled")) {
            return(
                <button className={this.state.classes} disabled></button>
            );
        } else {
            return(
                <button className={this.state.classes} onClick={() => updateDisplay(gameWorld[this.state.actionValue], 
                    this.state.actionMessage, activityFeed)}>{this.state.actionName}</button>
            );
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorld, activityFeed, updateDisplay }) => (
                    <div>
                        {this.createButton(gameWorld, activityFeed, updateDisplay)}
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default ActionButton;
