import React, { Component } from 'react';
import ActionButton from './ActionButton';
import '../appStyles.css';
import { GameWorldContext } from '../GameWorldContext';

class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionNum: 0
        }
        this.createActions = this.createActions.bind(this);
        this.createEmptyActions = this.createEmptyActions.bind(this);
    }
    createActions() {
        return(
            <GameWorldContext.Consumer>
                {({ gameWorldLocations, location }) => (
                    <div id="actions">
                    {
                        Object.entries(location["actions"]).map(([key, value]) => 
                        <ActionButton key={key} actionName={value["name"]} actionAddress={value["address"]} actionMessage={value["message"]} arrivalMessage={gameWorldLocations[value["address"]]["message"]} classes="button btnLightBlue"/>)
                    }
                    {this.createEmptyActions(Object.keys(location["actions"]).length)}
                    </div>
                )}
            </GameWorldContext.Consumer>
        ); 
    }
    createEmptyActions(numChildren) {
        var emptyActions = [];
        while(numChildren < 6) {
            emptyActions.push(<ActionButton key={numChildren+1} actionName=" " actionAddress="empty" actionMessage="empty" classes="button disabled" />);
            numChildren += 1;
        }
        return(emptyActions);
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
