import React, { useContext } from "react";
import { ThemeContext } from "./contexts";

const Header = ({text}) => {
    const { primaryColor } = useContext(ThemeContext);

return <h1 style={{color: primaryColor, display: 'block'}}>{text}</h1>
}

export default Header;