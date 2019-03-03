import React, { Component } from 'react';
import {GameWorldContext} from '../GameWorldContext';

class CharacterCreationButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            buttonType: this.props.buttonType,
        }
        this.setStyle = this.setStyle.bind(this);
    }
    setStyle(selectedClass, selectedProficiency) {
        var selectedStyle = {
            backgroundColor: "rgb(71, 70, 70)"
        }
        var unselectedStyle = {
            backgroundColor: "rgb(31, 30, 30)"
        }
        if(selectedClass === this.state.name || selectedProficiency === this.state.name) {
            return selectedStyle;
        } else {
            return unselectedStyle;
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ selectedClass, selectedProficiency, setSelection }) => (
                    <div>
                        <button style={this.setStyle(selectedClass, selectedProficiency)} 
                        onClick={() => setSelection(this.state.buttonType, this.state.name)}>
                        {this.state.name}</button>
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default CharacterCreationButton;
