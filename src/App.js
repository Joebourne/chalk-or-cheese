import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';
import Results from './components/Results';
import imageMap from './components/ImageRandomiser';

class App extends Component {
  state = {
    questionIndex: 0,
    answers: {}
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  onClickAnswer = (index, answer) => {
    imageMap[index].type === answer
      ? this.updateAnswers(index, true)
      : this.updateAnswers(index, false);
  };

  updateAnswers = (index, result) => {
    this.setState(prevState => {
      const prevAnswers = prevState.answers;
      return {
        answers: {
          ...prevAnswers,
          [index]: result
        },
        questionIndex: prevState.questionIndex + 1
      };
    });
  };

  calculateScore = answersObject => {
    let score = 0;
    Object.keys(answersObject).map(answer => {
      if (answersObject[answer] === true) score += 1;
    });
    return score;
  };

  render() {
    const { questionIndex, answers } = this.state;
    return (
      <div className="wrapper">
        <header className="header">
          <h1>
            <span style={{ color: 'white' }}>Chalk</span> or{' '}
            <span style={{ color: '#EDB91F' }}>Cheese</span>?
          </h1>
        </header>
        {questionIndex < 10 ? (
          <Question
            src={imageMap[questionIndex].src}
            onClickChalk={() => this.onClickAnswer(questionIndex, 'chalk')}
            onClickCheese={() => this.onClickAnswer(questionIndex, 'cheese')}
          />
        ) : (
          <Results score={this.calculateScore(answers)} />
        )}
      </div>
    );
  }
}

export default App;
