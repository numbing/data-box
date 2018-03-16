import React, { Component } from 'react';
import './App.css';
import Add from './components/addperson';
import Total from './components/total';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Add/>
        <Total/>
      </div>
    );
  }
}

export default App;
