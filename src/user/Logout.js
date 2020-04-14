import React from "react";

export default function Logout({ user }) {
    return (
        <div>
        Logged in as user: {user}
        <button type="submit" onClick={ e => e.preventDefault()} className="btn">Logout</button>
        </div>
    );
}