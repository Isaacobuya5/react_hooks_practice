import React, { useEffect, useState } from "react";


function ThemeItem({ theme, active, onClick}) {

    return (
        <span onClick={onClick} style={{ cursor: 'pointer', 
    paddingLeft: 8, fontWeight: active ? 'bold' : 'normal'}}>
        <span style={{ color: theme.primaryColor}}>Primary</span> /
        <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
    )
}

export default function ChangeTheme({ theme, setTheme}) {

        // state to allow us store the theme
        const [themes, setThemes] = useState([]);

        // fetching the list of themes
        // we then need to set the themes state with the themes we have fetched
        // this effect hook is only triggered when the component mounts, thus we pass an empty array
        // ensures that the hook does not have dependencies thus will be triggred only when the component mounts.
        useEffect(() => {
            fetch('/api/themes')
            .then(result => result.json())
            .then(themes => setThemes(themes));
        },[]);
        
    // function to check if a theme object is active
    function isActive(t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor;
    }
    
    // Now we call the map function to render all of the available themes and call the setTheme function when clicking on theme
    return (
        <div>
            Change theme:
              {themes.map((t, i) => 
                 <ThemeItem key= {'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
               )}
        </div>
    )
}