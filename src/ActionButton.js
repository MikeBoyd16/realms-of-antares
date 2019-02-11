import React, { Component } from 'react';

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
                <button type='button' onClick={this.props.onClick}>{this.props.actionName}</button>
            </div>
        );
    }
}

export default ActionButton;
