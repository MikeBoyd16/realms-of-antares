import React, { Component } from 'react';
import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: this.props.actionName
        }
    }
    render() {
        return(
            <div>
                <button className="button btnBorder btnLightBlue" onClick={this.props.onClick}>{this.props.actionName}</button>
            </div>
        );
    }
}

export default ActionButton;
