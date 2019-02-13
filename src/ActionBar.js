import React, { Component } from 'react';
import ActionButton from './ActionButton';
import './ActionBar.css';
import data from './data.json';

class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: data["Riverstar"]
        };
        this.createActions = this.createActions.bind(this);
    }
    handleAction = (newLocation) => { 
        this.setState({ currentLocation: data[newLocation] }) 
    }
    createActions() {
        return(
            <div>
            {
                Object.entries(this.state.currentLocation["actions"]).map(([key, value]) => 
                <ActionButton actionName={value["name"]} onClick={() => this.handleAction(value["value"])} />)
            }
            </div>
        );
    }
    render() {
        return(
            <div className="ActionBar">
                <div className="wrapper">
                    {this.createActions()}
                </div>
            </div>
        );
    }
};

export default ActionBar;
