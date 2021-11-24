import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import { Button } from "@blueprintjs/core";


class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      id: 1,      
      name: "test"    
    };   
  }

  render() {
    return (
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJS
        </a>
        <Test></Test>

        <Button icon="add" alignText="center"></Button>
      </header>
    </div>
  );
}

export default App;
