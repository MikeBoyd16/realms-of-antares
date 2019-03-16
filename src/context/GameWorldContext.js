import React from 'react';
import locations from '../data/location.json';

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
    location: locations["Branch1"],
    changeLocation: () => {},

    // Activity
    activityFeed: [locations["Branch1"]["message"]],
    message: locations["Branch1"]["message"],
    updateMessage: () => {},
    manageDisplay: () => {},
});