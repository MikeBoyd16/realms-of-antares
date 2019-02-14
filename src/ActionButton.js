import React, { Component } from 'react';
import './ActionButton.css';
import { GameWorldContext } from './GameWorldContext';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: this.props.actionName,
            actionValue: this.props.actionValue
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorld, changeLocation }) => (
                    <div>
                        <button className="button btnBorder btnLightBlue" onClick={() => changeLocation({...gameWorld[this.state.actionValue]})}>{this.state.actionName}</button>
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default ActionButton;
