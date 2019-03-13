import React from 'react';
import locations from './locations.json';

export const GameWorldContext = React.createContext({
    // Screen
    screen: "TitleMenu",
    changeScreen: () => {},
    updateScreen: () => {},

    // Character Creation
    playerName: " ",
    playerClass: " ",
    playerProficiency: " ",
    setPlayerName: () => {},
    setAttributeSelection: () => {},

    // Location
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    changeLocation: () => {},

    // Activity
    activityFeed: [locations["Riverstar"]["message"]],
    message: locations["Riverstar"]["message"],
    updateMessage: () => {},
    manageDisplay: () => {},
});