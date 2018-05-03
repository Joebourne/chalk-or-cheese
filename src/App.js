import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';

// temp dummy data
const images = [
  { type: 'chalk', url: '/1' },
  { type: 'cheese', url: '/2' },
  { type: 'cheese', url: '/3' },
  { type: 'chalk', url: '/4' },
  { type: 'cheese', url: '/5' }
];

class App extends Component {
  onClickChalk = index => {
    images[index].type === 'chalk'
      ? console.log('correct')
      : console.log('wrong');
  };

  onClickCheese = index => {
    images[index].type === 'cheese'
      ? console.log('correct')
      : console.log('wrong');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chalk or Cheese?</h1>
        </header>
        <Question
          url={images[0].url}
          onClickChalk={() => this.onClickChalk(0)}
          onClickCheese={() => this.onClickCheese(0)}
        />
      </div>
    );
  }
}

export default App;
