import React, { Component } from 'react';

// Import game context
import { GameWorldContext } from '../GameWorldContext';

// Import component styles
import '../appStyles.css';

class CharacterCreation extends Component {
    render() {
        return(
            <div id="characterCreation">
                <div id="namePanel">
                    <label>Name</label>
                    <input></input>
                </div>
                <div id="classPanel">
                    <label>Class</label>
                    <button>Soldier</button>
                    <button>Engineer</button>
                    <button>Merchant</button>
                    <button>Diplomat</button>
                </div>
                <div id="proficiencyPanel">
                    <label>Proficiency</label>
                    <button>Navigation</button>
                    <button>Barter</button>
                    <button>Hacking</button>
                    <button>Unarmed</button>
                    <button>Althetics</button>
                    <button>History</button>
                </div>
            </div>
        );
    }
}

export default CharacterCreation;
