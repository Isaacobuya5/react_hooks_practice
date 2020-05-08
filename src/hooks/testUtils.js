import React, { useReducer } from "react";
import { ThemeContext, StateContext } from "../contexts";
import { rootReducer } from "../reducers/rootReducer";

export function ThemeContextWrapper({ children }) {
    // children is a special prop of React components.
    // It will contain all other components passed to it as "children"
    return (
        <ThemeContext.Provider value={{
            primaryColor: 'deepskyblue',
            secondaryColor: 'coral'
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function StateContextWrapper({ children }) {
    const [ state, dispatch ] = useReducer(
        rootReducer, {
            user: '',
            posts: [],
            error: ''
        }
    );

    return <StateContext.Provider value={{
        state, dispatch
    }}>
        {children}
    </StateContext.Provider>
};