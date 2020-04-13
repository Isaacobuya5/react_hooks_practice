// Re-implementation of the useState Hook - though the exact implementation is much more complex than this.
import React from "react";
// we need the ReactDOM so as to force the rerendering of the component in our reimplementation of the useState Hook.
// If we used the actual React Hooks, this would have been dealt with internally.
import ReactDOM from "react-dom";

/**
 * useState function
 * @param {*} initialState - takes the initial state as arguement
 */

 // To define multiple Hooks, we need an array of values
 let values = [];
 let currentHook = 0;
// let value;

function useState(initialState) {
    // define a value where we store our initial state
    // now moved to 'global'
    // let value = initialState;

    // if (typeof value === 'undefined') value = initialState;

    if (typeof values[currentHook] === 'undefined') values[currentHook] = initialState;
    let hookIndex = currentHook;
    /**
 * Next we define the setState function where we will set the value to something different and force
 * re-rendering of our component in our re-implementation of the useState Hook.
 * For actual Hooks this would have been dealt with internally
 */
    function setState(nextValue) {
        values[hookIndex] = nextValue;
        // value = nextValue;

        ReactDOM.render(<App />, document.getElementById('root'))
    }
    // finally, we return the value and setState functions as an array
    /*
    * We use an array because we want to rename the value and useState variables 
    * Using arrays makes it easy to rename variables through destructuring
    */
    // return [value, setState];
    return [values[currentHook++], setState];
}

/**
 * Our Hook function uses a closure to store the current value.
 * Closure is an environment where variables exist and are stored.
 * In our case, the function provides the closure and the value variable is stored within that closure
 * The setState function also exists within that closure, - reason why we can access the value variable within that
 * function.
 * Outside the useState function we cannot directly access the value variable unless we return it from that function.
 */

function App() {
    currentHook = 0;
  // define the initial state
  const [name, setName] = useState('');
  // let's implement another Hook here
  const [lastName, setLastName] = useState('');
//   console.log(name);
//   console.log(setName);
  
  function handleChange(event) {
      event.preventDefault();
      setName(event.target.value);
  }

  function handleName(event) {
    event.preventDefault();
    setLastName(event.target.value);
  }
  return (
      <div>
      <form>
          <input type="text" value={name} onChange={handleChange} placeholder="Enter your name here" />
          <input type="text" value={lastName} onChange={handleName} placeholder="Enter your last name" />
      </form>
  <p>My name is : {name}</p>
  <p>My last name is : {lastName}</p>
      </div>
  )
}

export default App;