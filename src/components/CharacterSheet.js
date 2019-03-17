import React, { Component } from 'react';
import {GameWorldContext} from '../context/GameWorldContext';

// Styles
import '../css/CharacterSheet.css'

class CharacterSheet extends Component {
    render() {
        return (
            <GameWorldContext.Consumer>
            {({ player }) => (
            <div id="characterStatus">
                <div id="statusPanel">
                    <h3>Status</h3>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>{player["Name"]}</td>
                        </tr>
                        <tr>
                            <td>Class:</td>
                            <td>{player["Class"]}</td>
                        </tr>
                        <tr>
                            <td>Level:</td>
                            <td>{player["Level"]}</td>
                        </tr>
                        <tr>
                            <td>HP:</td>
                            <td>{player["Status"]["Current HP"]} / {player["Status"]["Max HP"]}</td>
                        </tr>
                        <tr>
                            <td>AP:</td>
                            <td>{player["Status"]["Current AP"]} / {player["Status"]["Max AP"]}</td>
                        </tr>
                    </table>
                </div>
                <div id="attributePanel">
                    <h3>Attributes</h3>
                    <table>
                        <tr>
                            <td>Strength:</td>
                            <td>{player["Attributes"]["Strength"]}</td>
                        </tr>
                        <tr>
                            <td>Constitution:</td>
                            <td>{player["Attributes"]["Constitution"]}</td>
                        </tr>
                        <tr>
                            <td>Dexterity:</td>
                            <td>{player["Attributes"]["Dexterity"]}</td>
                        </tr>
                        <tr>
                            <td>Intelligence:</td>
                            <td>{player["Attributes"]["Intelligence"]}</td>
                        </tr>
                        <tr>
                            <td>Wisdom:</td>
                            <td>{player["Attributes"]["Wisdom"]}</td>
                        </tr>
                        <tr>
                            <td>Charisma:</td>
                            <td>{player["Attributes"]["Charisma"]}</td>
                        </tr>
                    </table>
                </div>
                <div id="skillPanel">
                    <h3>Skills</h3>
                    <table>
                        <tr>
                            <td>Unarmed:</td>
                            <td>{player["Skills"]["Unarmed"]}</td>
                        </tr>
                        <tr>
                            <td>Handgun:</td>
                            <td>{player["Skills"]["Handgun"]}</td>
                        </tr>
                        <tr>
                            <td>Rifle:</td>
                            <td>{player["Skills"]["Rifle"]}</td>
                        </tr>
                        <tr>
                            <td>Navigation:</td>
                            <td>{player["Skills"]["Navigation"]}</td>
                        </tr>
                        <tr>
                            <td>Hacking:</td>
                            <td>{player["Skills"]["Hacking"]}</td>
                        </tr>
                        <tr>
                            <td>Engineering:</td>
                            <td>{player["Skills"]["Engineering"]}</td>
                        </tr>
                        <tr>
                            <td>Speechcraft:</td>
                            <td>{player["Skills"]["Speechcraft"]}</td>
                        </tr>
                        <tr>
                            <td>Athletics:</td>
                            <td>{player["Skills"]["Athletics"]}</td>
                        </tr>
                        <tr>
                            <td>Acrobatics:</td>
                            <td>{player["Skills"]["Acrobatics"]}</td>
                        </tr>
                        <tr>
                            <td>History:</td>
                            <td>{player["Skills"]["History"]}</td>
                        </tr>
                    </table>
                </div>
            </div>
            )}
            </GameWorldContext.Consumer>
        );
    }
}

export default CharacterSheet;