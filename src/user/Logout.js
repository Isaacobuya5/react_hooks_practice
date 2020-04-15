import React from "react";

import { logoutUser } from "../actions/user.actions";

export default function Logout({ user, dispatch }) {
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