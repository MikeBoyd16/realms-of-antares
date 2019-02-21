import React from 'react';
import locations from './locations.json';

export const GameWorldContext = React.createContext({
    gameWorldLocations: locations,
    location: locations["Riverstar"],
    currentNotification: locations["Riverstar"]["message"],
    activityFeed: [locations["Riverstar"]["message"]],
    activityNotificationCount: 0,
    changeLocation: () => {},
    updateActivityFeed: () => {},
    updateDisplay: () => {},
    activityNotificationIncrement: () => {}
});