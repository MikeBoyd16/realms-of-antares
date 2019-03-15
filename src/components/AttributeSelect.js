import React, { Component } from 'react';
import {GameWorldContext} from '../GameWorldContext';

class AttributeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            buttonType: this.props.buttonType,
        }
        this.setStyle = this.setStyle.bind(this);
    }
    setStyle(playerClass, playerProficiency) {
        var selectedStyle = {
            backgroundColor: "rgb(31, 30, 30)",
            color: "rgb(255, 255, 255)"
        }
        var unselectedStyle = {
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(31, 30, 30)"
        }
        if(playerClass === this.state.name || playerProficiency === this.state.name) {
            return selectedStyle;
        } else {
            return unselectedStyle;
        }
    }
    render() {
        return(
            <GameWorldContext.Consumer>
                {({ playerClass, playerProficiency, setAttributeSelection }) => (
                    <div>
                        <button style={this.setStyle(playerClass, playerProficiency)} 
                        onClick={() => setAttributeSelection(this.state.buttonType, this.state.name)}>
                        {this.state.name}</button>
                    </div>
                )}
            </GameWorldContext.Consumer>
        );
    }
}

export default AttributeSelect;
