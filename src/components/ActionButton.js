import React, { Component } from 'react';
import '../css/ActionButton.css';
import { GameWorldContext } from '../context/GameWorldContext';

class ActionButton extends Component {
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorldLocations, updateActionMessage, manageDisplay }) => (
                    <div>
                        <button 
                            className={this.props.classes} 
                            onMouseOver={() => updateActionMessage(this.props.actionMessage)} 
                            onMouseOut={() => updateActionMessage(" ")} 
                            onClick={() => manageDisplay(gameWorldLocations[this.props.actionAddress], this.props.actionMessage)}>
                        </button>
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default ActionButton;
