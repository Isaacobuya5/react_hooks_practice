import React from "react";

export default function Logout({ user, setUser }) {
    return (
        <div className="logout">
        <span className="loggedin-text">Welcome user: {user}</span>
        <button type="submit" onClick={ e => {
            e.preventDefault();
            setUser('');
            }} className="logout-btn">Logout</button>
        </div>
    );
}