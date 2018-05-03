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
  state = {
    answers: {}
  };

  onClickChalk = index => {
    images[index].type === 'chalk'
      ? this.updateAnswers(index, 'correct')
      : this.updateAnswers(index, 'wrong');
  };

  onClickCheese = index => {
    images[index].type === 'cheese'
      ? this.updateAnswers(index, 'correct')
      : this.updateAnswers(index, 'wrong');
  };

  updateAnswers = (index, result) => {
    this.setState(prevState => {
      const prevAnswers = this.state.answers;
      return {
        answers: {
          ...prevAnswers,
          [index]: result
        }
      };
    });
  };

  logAnswers = () => console.log(this.state.answers);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chalk or Cheese?</h1>
        </header>
        {images.map((image, index) => (
          <Question
            key={image.url}
            url={image.url}
            onClickChalk={() => this.onClickChalk(index)}
            onClickCheese={() => this.onClickCheese(index)}
          />
        ))}
        <hr />
        <button onClick={this.logAnswers}>log answers</button>
      </div>
    );
  }
}

export default App;
