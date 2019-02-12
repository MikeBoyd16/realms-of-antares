import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children
        }
        this.addLine = this.addLine.bind(this);
    }
    addLine() {
        return(
            <div>
                <hr className="line" />
            </div>
        );
    }
    render() {
        return(
            <div className="Panel">
                {this.addLine()}
                {this.state.children}
                {this.addLine()}
            </div>
        );
    }
}

export default Panel;
