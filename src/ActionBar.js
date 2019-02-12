import React, { Component } from 'react';
import Location from './Location';
import './ActionBar.css';

class ActionBar extends Component {
    render() {
        return(
            <div className="ActionBar">
                <div className="Wrapper">
                    <Location />
                </div>
            </div>
        );
    }
};

export default ActionBar;
