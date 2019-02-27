import React, { Component } from 'react';

// Import game context
import { GameWorldContext } from '../GameWorldContext';

// Import component styles
import '../appStyles.css';

class TitleMenu extends Component {
    render() {
        return(
            <div id="titleMenu">
                <div id="titlePanel">
                    <img src={require("../images/title.PNG")} />
                </div>
                <div id="actionPanel">
                    <button>New Game</button>
                    <button>Import Save</button>
                </div>
            </div>
        );
    }
}

export default TitleMenu;
