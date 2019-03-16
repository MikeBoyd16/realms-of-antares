import React, { Component } from 'react';
import { GameWorldContext } from '../context/GameWorldContext';

// Styles
import '../css/Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <GameWorldContext.Consumer>
            {({ changeScreen }) => (
            <div id="navigation">
                <button id="navButton" onClick={() => changeScreen("Story")}>Story</button>
                <button id="navButton" onClick={() => changeScreen("Character")}>Character</button>
                <button id="navButton">Export Save</button>
            </div>
            )}
            </GameWorldContext.Consumer>
        );
    }
}

export default Navigation;