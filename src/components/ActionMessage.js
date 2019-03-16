import React, { Component } from 'react';

// Styles
import '../css/ActionBar.css';

class ActionMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
        this.setStyle = this.setStyle.bind(this);
    }
    setStyle() {
        var actionMessageDefaultStyle = { };
        var actionMessageHoverStyle = {
            animation: "moving 1s 1",
            color: "black"
        };
        if(this.props.message === " ") {
            return " ";
        } else {
            return "move";
        }
    }
    render() {
        return(
            <div
                id="actionMessage" 
                className={this.setStyle()}>
                {this.props.message}
            </div>
        );
    }
};

export default ActionMessage;
