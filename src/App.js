import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';
import imageMap from './components/ImageRandomiser';

class App extends Component {
  state = {
    answers: {}
  };

  onClickChalk = index => {
    imageMap[index].type === 'chalk'
      ? this.updateAnswers(index, 'correct')
      : this.updateAnswers(index, 'wrong');
  };

  onClickCheese = index => {
    imageMap[index].type === 'cheese'
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
      <div className="wrapper">
        <header className="header">
          <h1>Chalk or Cheese?</h1>
        </header>
        <Question
          key={imageMap[0].src}
          src={imageMap[0].src}
          onClickChalk={() => this.onClickChalk(0)}
          onClickCheese={() => this.onClickCheese(0)}
          className="question"
        />
        {/* <div className="footer">
          <button onClick={this.logAnswers}>log answers</button>
        </div> */}
      </div>
    );
  }
}

export default App;
