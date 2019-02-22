import React, { Component } from 'react';
import '../css/ActionButton.css';
import { GameWorldContext } from '../GameWorldContext';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: this.props.actionName,
            actionMessage: this.props.actionMessage,
            actionAddress: this.props.actionAddress,
            arrivalMessage: this.props.arrivalMessage,
            classes: this.props.classes
        }
        this.createButton = this.createButton.bind(this);
    }
    createButton(gameWorldLocations, activityFeed, updateDisplay) {
        if(this.state.classes.includes("disabled")) {
            return(
                <button className={this.state.classes} disabled></button>
            );
        } else {
            return(
                <button className={this.state.classes} onClick={() => updateDisplay(gameWorldLocations[this.state.actionAddress], 
                    this.state.actionMessage, this.state.arrivalMessage, activityFeed)}>{this.state.actionName}</button>
            );
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorldLocations, activityFeed, updateDisplay }) => (
                    <div>
                        {this.createButton(gameWorldLocations, activityFeed, updateDisplay)}
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default ActionButton;
