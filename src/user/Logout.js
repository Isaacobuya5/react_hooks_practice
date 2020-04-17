import React,{useContext} from "react";

import { logoutUser } from "../actions/user.actions";

import { StateContext } from "../contexts";

export default function Logout() {

    const { state, dispatch} = useContext(StateContext);

    const { user } = state;
    return (
        <div className="logout">
        <span className="loggedin-text">Welcome user: {user}</span>
        <button type="submit" onClick={ e => {
            e.preventDefault();
            // setUser('');
            dispatch(logoutUser());
            }} className="logout-btn">Logout</button>
        </div>
    );
}