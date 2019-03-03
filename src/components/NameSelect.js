import React, { Component } from 'react';
import {GameWorldContext} from '../GameWorldContext';

class NameSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBackground: { backgroundColor: "rgb(31, 30, 30)" },
        }
        this.onNameChange = this.onNameChange.bind(this);
    }
    onNameChange(event, setPlayerName){
        if(event.target.value !== ""){
            this.setState({ inputBackground: { backgroundColor: "rgb(71, 70, 70)" } });
            setPlayerName(event.target.value);
        } else{
            this.setState({ inputBackground: { backgroundColor: "rgb(31, 30, 30)" } });
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
            {({ setPlayerName }) => (
                <div id="playerName">
                    <label>Name</label>
                    <input style={this.state.inputBackground} onChange={(event) => this.onNameChange(event, setPlayerName)}/>
                </div>
            )}
            </GameWorldContext.Consumer>
        );
    }
}

export default NameSelect;
