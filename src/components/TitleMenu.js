import React, { Component } from 'react';
import { GameWorldContext } from '../GameWorldContext';

// Styles
import '../appStyles.css';

class TitleMenu extends Component {
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ changeScreen }) => (
                    <div id="titleMenu">
                        <div id="titlePanel">
                            <img src={require("../images/title.PNG")} />
                        </div>
                        <div id="actionPanel">
                            <button onClick={() => changeScreen("CharacterCreation")}>New Game</button>
                            <button>Import Save</button>
                        </div>
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default TitleMenu;
