import React from 'react';
import './App.css';

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
  event.preventDefault();
  const { value } = event.target;
  this.setState({name: value});
  }
  render() {
    const {name} = this.state;
  return (
    <div className="App">
     <input type="text" value={name} onChange={this.handleChange} placeholder="Enter your name here"/>
  <h1>My name is {name}</h1>
    </div>
  );
  }

}

export default App;
