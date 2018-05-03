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
    answers: []
  };

  onClickChalk = index => {
    images[index].type === 'chalk'
      ? this.updateAnswers('correct')
      : this.updateAnswers('wrong');
  };

  onClickCheese = index => {
    images[index].type === 'cheese'
      ? this.updateAnswers('correct')
      : this.updateAnswers('wrong');
  };

  updateAnswers = result => {
    this.setState(prevState => {
      let answers = prevState.answers;
      answers.push(result);
      return {
        answers
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
