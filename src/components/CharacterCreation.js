import React, { Component } from 'react';
import {GameWorldContext} from '../GameWorldContext';

// Components
import AttributeSelect from './AttributeSelect';
import NameSelect from './NameSelect';
import StartGame from './StartGame';

// Styles
import '../css/CharacterCreation.css';

class CharacterCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTypes: {
                playerClass: {
                    labelName: "Class",
                    buttonNames: ["Soldier", "Engineer", "Merchant", "Diplomat"]
                },
                playerProficiency: {
                    labelName: "Proficiency",
                    buttonNames:  ["Navigation", "Barter", "Hacking", "Unarmed", "Athletics", "History"]
                }
            },
        }
        this.createStartGame = this.createStartGame.bind(this);
        this.createButtons = this.createButtons.bind(this);
    }
    createStartGame(playerName, playerClass, playerProficiency) {
        if(playerName !== "" &&
            playerClass !== "" &&
            playerProficiency !== "") {
            return(<StartGame visible="visible"/>);
        } else {
            return(<StartGame visible="notVisible"/>);
        }
    }
    createButtons = (buttonType) => {
        return(
            <div id={buttonType}>
                <label>{this.state.buttonTypes[buttonType]["labelName"]}</label>
                {
                    this.state.buttonTypes[buttonType]["buttonNames"].map((name, idx) => 
                    <AttributeSelect key={idx} buttonType={buttonType} name={name}/>)
                }
            </div>
        );
    }
    render() {
        return(
            <GameWorldContext.Consumer>
            {({ playerName, playerClass, playerProficiency }) => (
                <div id="characterCreation">
                    <NameSelect/>
                    {this.createButtons("playerClass")}
                    {this.createButtons("playerProficiency")}
                    {this.createStartGame(playerName, playerClass, playerProficiency)}
                </div>
            )}
            </GameWorldContext.Consumer>
        );
    }
}

export default CharacterCreation;
