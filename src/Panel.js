import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child: this.props.child,
            color: this.props.color
        }
    }
    render() {
        return(
            <div className="Panel" id={this.state.color}>
                {this.state.child}
            </div>
        );
    }
}

export default Panel;
