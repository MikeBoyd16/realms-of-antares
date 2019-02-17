import React from 'react';
import data from './data.json';

export const GameWorldContext = React.createContext({
    gameWorld: data,
    location: data["Riverstar"],
    currentNotification: data["Riverstar"]["message"],
    activityFeed: [data["Riverstar"]["message"]],
    activityNotificationCount: 0,
    changeLocation: () => {},
    updateActivityFeed: () => {},
    updateDisplay: () => {}
});