import React, { Component } from 'react';
import { GameWorldContext } from '../context/GameWorldContext';

// Components
import ActionMessage from './ActionMessage';
import ActionButton from './ActionButton';

// Styles
import '../css/ActionBar.css';

class ActionBar extends Component {
    render() {
        return(
            <div id="actionBar">
                <GameWorldContext.Consumer>
                    {({ location, actionMessage }) => (
                        <>
                        <ActionMessage message={actionMessage} />
                        <div id="actions">
                        {
                            Object.entries(
                                location["actions"]).map(([key, value]) => 
                                <ActionButton 
                                    key={key} 
                                    actionAddress={value["address"]} 
                                    actionMessage={value["message"]} 
                                    classes="button btnLightBlue"
                                />
                            )
                        }
                        </div>
                        </>
                    )}
                </GameWorldContext.Consumer>
            </div>
        );
    }
};

export default ActionBar;
