import React, { Component } from 'react';
// import './ActionButton.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child: this.props.child
        }
    }
    render() {
        return(
            <div>
                {this.state.child}
            </div>
        );
    }
}

export default Panel;
