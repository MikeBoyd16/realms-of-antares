import React from 'react';
import locations from './locations.json';

export const GameWorldContext = React.createContext({
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    activityFeed: [locations["Riverstar"]["message"]],
    activityNotificationCount: 0,
    changeLocation: () => {},
    displayArrivalMessage: () => {},
    updateActivityFeed: () => {},
    updateDisplay: () => {},
});