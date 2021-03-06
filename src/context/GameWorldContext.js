import React from 'react';
import game from '../data/game.json';
import locations from '../data/location.json';
import character from '../data/character.json';

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
    startGame: () => {},

    // Location
    gameWorldLocations: locations,
    location: locations["Branch1"],
    changeLocation: () => {},

    // Activity
    activityFeed: locations["Branch1"]["message"],
    actionMessage: " ",
    updateActionMessage: () => {},
    manageDisplay: () => {},

    // Player
    game: game,
    player: character,
});