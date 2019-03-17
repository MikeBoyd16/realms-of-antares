import React, { Component } from 'react';
import {GameWorldContext} from '../context/GameWorldContext';

class StartGame extends Component {
    constructor(props) {
        super(props);
        this.handleDisabled = this.handleDisabled.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleDisabled() {
        if(this.props.visible === "notVisible") {
            return true;
        } else {
            return false;
        }
    }
    handleClick(startGame, playerName, playerClass, playerProficiency) {
        if(playerName !== "" &&
            playerClass !== "" &&
            playerProficiency !== "") {
                startGame();
            }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
            {({ startGame, playerName, playerClass, playerProficiency }) => (
                <div id="startGame" className={this.props.visible}>
                    <button className={this.props.visible} 
                    onClick={() => this.handleClick(startGame, playerName, playerClass, playerProficiency)}
                    disabled={this.handleDisabled()}>
                        Start Game
                    </button>
                </div>
            )}
            </GameWorldContext.Consumer>
        );
    }
}

export default StartGame;
