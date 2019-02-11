import React, { Component } from 'react';
import ActionButton from './ActionButton';
import data from './data.json';

const LocationActions = ({ currentLocation, onActionClick }) => (
    <div>
        {
            Object.entries(currentLocation["actions"]).map(([key, value]) => <ActionButton type='button' actionName={value["name"]} onActionClick={() => onActionClick(value["value"])} />)
        }
    </div>
);

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: data["Riverstar"]
        };
    }
    handleClick = (newLocation) => { 
        this.setState({ currentLocation: data[newLocation] }) 
    }
    render() {
        return(
            <div>
                 <LocationActions currentLocation={this.state.currentLocation} onActionClick={this.handleClick} />
            </div>
        );
    }
};

export default Location;
