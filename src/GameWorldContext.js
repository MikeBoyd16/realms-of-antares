import React from 'react';
import locations from './locations.json';

export const GameWorldContext = React.createContext({
    screen: "TitleMenu",
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    activityFeed: [locations["Riverstar"]["message"]],
    changeScreen: () => {},
    changeLocation: () => {},
    displayArrivalMessage: () => {},
    updateActivityFeed: () => {},
    manageDisplay: () => {},
});