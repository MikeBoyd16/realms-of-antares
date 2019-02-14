import React from 'react';
import data from './data.json';

export const GameWorldContext = React.createContext({
    gameWorld: data,
    locationID: "Riverstar",
    location: data["Riverstar"],
    changeLocation: () => {}
});