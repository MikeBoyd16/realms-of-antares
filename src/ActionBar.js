import React, { Component } from 'react';
import ActionButton from './ActionButton';
import './ActionBar.css';
import { GameWorldContext } from './GameWorldContext';

class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.createActions = this.createActions.bind(this);
    }
    createActions() {
        return(
            <GameWorldContext.Consumer>
                {({ location }) => (
                    <div>
                    {
                        Object.entries(location["actions"]).map(([key, value]) => 
                        <ActionButton key={key} actionName={value["name"]} actionValue={value["value"]} />)
                    }
                    </div>
                )}
            </GameWorldContext.Consumer>
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
