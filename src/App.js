import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import SignInRegister from './SignInRegister';
import NewScoreInput from './NewScoreInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <NewScoreInput />
      </div>
    );
  }
}

export default App;
