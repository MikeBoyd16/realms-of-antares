import React, { Component } from 'react';

// Styles
import '../css/Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div id="navigation">
                <button id="navButton">Game</button>
                <button id="navButton">Character</button>
                <button id="navButton">Export Save</button>
            </div>
        );
    }
}

export default Navigation;