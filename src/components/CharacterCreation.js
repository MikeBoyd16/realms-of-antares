import React, { Component } from 'react';
import '../appStyles.css';
import '../css/CharacterCreation.css';
import AttributeSelect from './AttributeSelect';
import NameSelect from './NameSelect';

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
        this.createButtons = this.createButtons.bind(this);
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
            <div id="characterCreation">
                <NameSelect/>
                {this.createButtons("playerClass")}
                {this.createButtons("playerProficiency")}
            </div>
        );
    }
}

export default CharacterCreation;
