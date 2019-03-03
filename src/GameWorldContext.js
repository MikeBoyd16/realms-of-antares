import React from 'react';
import locations from './locations.json';

export const GameWorldContext = React.createContext({
    selectedName: " ",
    selectedClass: " ",
    selectedProficiency: " ",
    screen: "TitleMenu",
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    activityFeed: [locations["Riverstar"]["message"]],
    setSelection: () => {},
    changeClassSelection: () => {},
    changeProficiencySelection: () => {},
    changeScreen: () => {},
    changeLocation: () => {},
    displayArrivalMessage: () => {},
    updateActivityFeed: () => {},
    manageDisplay: () => {},
});