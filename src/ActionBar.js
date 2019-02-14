import React, { Component } from 'react';
import ActionButton from './ActionButton';
import './ActionBar.css';
import { GameWorldContext } from './GameWorldContext';

class ActionBar extends Component {
    render() {
        return(
            <div className="ActionBar">
                <div className="wrapper">
                    <GameWorldContext.Consumer>
                        {({ location }) => (
                            <div>
                            {
                                Object.entries(location["actions"]).map(([key, value]) => 
                                <ActionButton key={key} actionName={value["name"]} actionValue={value["value"]} actionMessage={value["message"]} />)
                            }
                            </div>
                        )}
                    </GameWorldContext.Consumer>   
                </div>
            </div>
        );
    }
};

export default ActionBar;
