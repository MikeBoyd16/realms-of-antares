import React from 'react';
import data from './data.json';

export const GameWorldContext = React.createContext({
    gameWorld: data,
    location: data["Riverstar"],
    changeLocation: () => {}
});