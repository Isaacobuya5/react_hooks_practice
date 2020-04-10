import React, {useState} from "react";

function App() {
    /**
     * To use state via Hooks, we simply call the useState() passing our initial state
     * Returns an array of two with two elements
     *  a.) The current state (name)
     *  b.) A setter function to set the state (setName)
     * We can use destructuring to store those two elements in separate variables
     */
    const nameHook = useState('');
    //access the first element and store in a separate variable
    const name = nameHook[0];
    // setter function
    const setName = nameHook[1];
    // same as
    // const [name, setName] = useState('');

    // defining our input handler function
    // no need to bind the function to "this"
    function handleChange(event) {
        event.preventDefault();
        // call the setter function to update the state
        setName(event.target.value);
    }

    return (
        <div>
             <input type="text" value={name} onChange={handleChange} placeholder="Enter your name here"/>
             <h1>My name is {name}</h1>
        </div>
    )
}

export default App;