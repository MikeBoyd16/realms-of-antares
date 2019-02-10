import React, { Component } from 'react';
import Location from './Location';

class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Balmora'
        };
    }
    render() {
        return(
            <div>
                <Location name={this.state.location} />
            </div>
        );
    }
};

export default ActionBar;
