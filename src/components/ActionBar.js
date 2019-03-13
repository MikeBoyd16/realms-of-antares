import React, { Component } from 'react';
import { GameWorldContext } from '../GameWorldContext';

// Components
import ActionButton from './ActionButton';

// Styles
import '../css/ActionBar.css';

class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionNum: 0
        }
        this.createActions = this.createActions.bind(this);
    }
    createActions() {
        return(
            <GameWorldContext.Consumer>
                {({ location }) => (
                    <div id="actions">
                    {
                        Object.entries(location["actions"]).map(([key, value]) => 
                        <ActionButton key={key} actionName={value["name"]} actionAddress={value["address"]} actionMessage={value["message"]} classes="button btnLightBlue"/>)
                    }
                    </div>
                )}
            </GameWorldContext.Consumer>
        ); 
    }
    render() {
        return(
            <div id="actionBar">
                {this.createActions()}
            </div>
        );
    }
};

export default ActionBar;
