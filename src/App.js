import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chalk or Cheese?</h1>
        </header>
        <Question />
      </div>
    );
  }
}

export default App;
