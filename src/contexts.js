import React from "react";

export const ThemeContext = React.createContext({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'

});

// used when no provider is defined
export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
});

