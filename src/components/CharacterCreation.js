import React, { Component } from 'react';
import {GameWorldContext} from '../GameWorldContext';
import '../appStyles.css';
import '../css/CharacterCreation.css';
import CharacterCreationButton from './CharacterCreationButton';

class CharacterCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTypes: {
                playerClasses: {
                    labelName: "Class",
                    buttonNames: ["Soldier", "Engineer", "Merchant", "Diplomat"]
                },
                playerProficiencies: {
                    labelName: "Proficiency",
                    buttonNames:  ["Navigation", "Barter", "Hacking", "Unarmed", "Athletics", "History"]
                }
            },
            classSelected: " ",
            proficiencySelected: " ",
        }
        this.createButtons = this.createButtons.bind(this);
    }
    createButtons = (buttonType) => {
        return(
            <div id={buttonType}>
                <label>{this.state.buttonTypes[buttonType]["labelName"]}</label>
                {
                    this.state.buttonTypes[buttonType]["buttonNames"].map((name, idx) => 
                    <CharacterCreationButton key={idx} buttonType={buttonType} name={name}/>)
                }
            </div>
        );
    }
    render() {
        return(
            <div id="characterCreation">
                <div id="playerName">
                    <label>Name</label>
                    <input></input>
                </div>
                {this.createButtons("playerClasses")}
                {this.createButtons("playerProficiencies")}
            </div>
        );
    }
}

export default CharacterCreation;
