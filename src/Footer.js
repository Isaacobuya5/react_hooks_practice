import React from "react";
import { useCurrentRoute } from "react-navi";

export default function Footer() {
    // obtaining the current route
    const { url } = useCurrentRoute(); 

    return (
        <div><a href={url.href}>Current Page</a></div>
    );
} 