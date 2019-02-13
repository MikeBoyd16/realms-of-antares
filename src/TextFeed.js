import React, { Component } from 'react';
import './TextFeed.css';

class TextFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: " "
        }
        this.addText = this.addText.bind(this);
    }
    addText() {
        return(
            <div>
                
            </div>
        );
    }
    render() {
        return(
            <div className="TextFeed">
                {this.state.text}
            </div>
        );
    }
}

export default TextFeed;
