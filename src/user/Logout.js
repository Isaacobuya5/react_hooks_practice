import React from "react";

import { logoutUser } from "../actions/user.actions";

import { useUserState } from "../hooks/useUserState";
import { useDispatch } from "../hooks/useDispatch";

export default function Logout() {

    const user = useUserState();
    const dispatch = useDispatch();

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