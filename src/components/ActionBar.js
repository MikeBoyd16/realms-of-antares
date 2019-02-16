import React, { Component } from 'react';
import ActionButton from './ActionButton';
import '../css/ActionBar.css';
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
                {({ location }) => (
                    <div>
                    {
                        Object.entries(location["actions"]).map(([key, value]) => 
                        <ActionButton key={key} actionName={value["name"]} actionValue={value["value"]} actionMessage={value["message"]} classes="button btnLightBlue"/>)
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
            emptyActions.push(<ActionButton key={numChildren+1} actionName=" " actionValue="empty" actionMessage="empty" classes="button disabled" />);
            numChildren += 1;
        }
        return(emptyActions);
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
