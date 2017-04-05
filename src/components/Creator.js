import React, { Component } from 'react';
import Quiz from './Quiz';

class Creator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quiz: {
        question: "",
        answerOptions: [
          {
            id: 0,
            text: ""
          },
          {
            id: 1,
            text: ""
          },
          {
            id: 2,
            text: ""
          },
          {
            id: 3,
            text: ""
          }
        ],
        rightAnswerId: -1
      }

    };

    this.quizname = '';
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }
  handleInputChange = (event, id) => {
    let answerOptions = this.state.quiz.answerOptions;
    answerOptions[id].text = event.target.value;
    this.setState({ quiz: { ...this.state.quiz, answerOptions: answerOptions } });
    event.preventDefault();
  }
  handleQuestionChange = (event) => {
    let question = this.state.question;
    question = event.target.value;
    this.setState({ quiz: { ...this.state.quiz, question: question } });
    event.preventDefault();
  }
  handleAnswerClick = (questionId, answerId) => {
    this.setState({ quiz: { ...this.state.quiz, rightAnswerId: answerId } });
    event.preventDefault();
  }
  getSymbol = (index) => {
    if (index !== this.state.quiz.rightAnswerId) {
      return <span>&#9744;</span>;
    }
    else {
      return <span>&#9745;</span>;
    }
  }
  submitQuestion = () => {
    let json = JSON.stringify(this.state.quiz);
    console.warn("submit", json );
  }
  render() {
    return (
      <div className="App container">
        <div>
          Quiz Name: <input type="text" ref={input => this.quizname = input} />
          <Quiz quiz={this.state.quiz} normalQuiz={false} getSymbol={this.getSymbol} onAnswerClick={this.handleAnswerClick} onAnswerChange={this.handleInputChange} onQuestionChange={this.handleQuestionChange} />
          <button onClick={this.submitQuestion} >Submit</button>
        </div>
      </div>
    );
  }
}

Creator.defaultProps = {

};

export default Creator;
