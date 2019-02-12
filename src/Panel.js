import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child: this.props.child
        }
    }
    render() {
        return(
            <div className="Panel">
                {this.state.child}
            </div>
        );
    }
}

export default Panel;
