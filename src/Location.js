import React, { Component } from 'react';

var locations = {
    'Balmora': { 'Town Hall': 'Town Hall', 'General Goods': 'General Goods', 'Job Board': 'Job Board', 'Go To Vivec': 'Vivec' },
    'Vivec': { 'Bank': 'Bank', 'Blacksmith': 'Blacksmith', 'Guild': 'Guild', 'Go To Balmora': 'Balmora' }
}

const LocationActions = ({ locations, currentLocation, onActionClick }) => (
    <div>
        {
            Object.entries(locations[currentLocation]).map(([key, value]) => <button type='button' onClick={() => onActionClick(value)}>{key}</button>)
        }
    </div>
);

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }

    handleClick = (e) => { this.setState({ name: e }) }

    render() {
        return(
            <div>
                 <LocationActions locations={locations} currentLocation={this.state.name} onActionClick={this.handleClick} />
            </div>
        );
    }
};

export default Location;
