import React, { useEffect, useState } from "react";
import { useAPIThemes } from "../hooks/api";


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

    /**
     * Replace the state and the useEffect hooks with the useRequest hook.
     * axios and request Hook provides a powerful way of handling requests.
     * With these libraries, we have access to features that enable us to cancel a single or clear all pending requests.
     * Also, using these libraries makes it easier to deal with errors and loading states.
     * The useResource hook returns a value and a getter function.
     * Calling a getter function will request the hook.
     * The Resource Hook returns an object with a "data" value, an "isLoading" boolean,
     * an "error" object and a "cancel" fuction to cancel the pending request
     * we then need to define a useEffect hook to trigger the getThemes function.
     * We only want to trigger it once when the component mounts
     */
         const [themes, getThemes ] = useAPIThemes();

         // destructuring "data" and "isLoading" boolean from themes object.
         const { data, isLoading } = themes;

         useEffect(getThemes,[]);

        // state to allow us store the theme
        // const [themes, setThemes] = useState([]);

        // fetching the list of themes
        // we then need to set the themes state with the themes we have fetched
        // this effect hook is only triggered when the component mounts, thus we pass an empty array
        // ensures that the hook does not have dependencies thus will be triggred only when the component mounts.
        // useEffect(() => {
        //     fetch('/api/themes')
        //     .then(result => result.json())
        //     .then(themes => setThemes(themes));
        // },[]);
        
    // function to check if a theme object is active
    function isActive(t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor;
    }
    
    // Now we call the map function to render all of the available themes and call the setTheme function when clicking on theme

    let content = (<div>
    Change theme:
      {data && data.map((t, i) => 
         <ThemeItem key= {'theme-' + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
       )}
       </div>
       );
    return isLoading ? <div>Loading themes...</div> : content;
}