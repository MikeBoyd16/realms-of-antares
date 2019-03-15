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
            classes: this.props.classes
        }
        this.createButton = this.createButton.bind(this);
    }
    createButton(gameWorldLocations, manageDisplay) {
        return(
            <button className={this.state.classes} onClick={() => manageDisplay(gameWorldLocations[this.state.actionAddress], 
                this.state.actionMessage)}></button>
        );
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorldLocations, manageDisplay }) => (
                    <div>
                        {this.createButton(gameWorldLocations, manageDisplay)}
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default ActionButton;
