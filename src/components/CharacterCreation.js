import React, { Component } from 'react';
import '../appStyles.css';

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
            proficiencySelected: " "
        }
        this.createButtons = this.createButtons.bind(this);
        this.handleButtonSelect = this.handleButtonSelect.bind(this);
    }
    createButtons = (buttonType) => {
        return(
            <div id={buttonType}>
                <label>{this.state.buttonTypes[buttonType]["labelName"]}</label>
                {
                    this.state.buttonTypes[buttonType]["buttonNames"].map((name, idx) => 
                    <button key={idx} id={name} onClick={this.handleButtonSelect}>{name}</button>)
                }
            </div>
        );
    }
    handleButtonSelect = (event) => {

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
