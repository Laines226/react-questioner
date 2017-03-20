import React, { Component } from 'react';
import Quiz from './Quiz'

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
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }
  handleInputChange = (event, id) => {
    console.log("handleInputChange [input], [id]", event.target.value, id);
    let answerOptions = this.state.quiz.answerOptions;
    answerOptions[id].text = event.target.value;
    this.setState({ quiz: { ...this.state.quiz, answerOptions: answerOptions } });
  }
  handleQuestionChange = (event) => {
    console.log("handleQuestionChange [input], [id]", event.target.value);
    let question = this.state.question;
    question = event.target.value;
    this.setState({ quiz: { ...this.state.quiz, question: question } });
  }
  handleAnswerClick = (questionId, answerId) => {
    console.log("handleAnswerClick [questionId], [answerId]", questionId, answerId);
    this.setState({ quiz: { ...this.state.quiz, rightAnswerId: answerId } });
  }
  getSymbol = (index) => {
    console.log("getSymbol [option]", index);
    if (index !== this.state.quiz.rightAnswerId) {
      return <span>&#9744;</span>;
    }
    else {
      return <span>&#9745;</span>;
    }
  }
  submitQuestion = (event) => {
    console.log("submitQuestion");
    let json = JSON.stringify(this.state.quiz);
    console.log("submitQuestion", json);

  }
  render() {
    return (
      <div className="App">
        <Quiz quiz={this.state.quiz} normalQuiz={false} getSymbol={this.getSymbol} onAnswerClick={this.handleAnswerClick} onAnswerChange={this.handleInputChange} onQuestionChange={this.handleQuestionChange} />
        <button onClick={this.submitQuestion} >Submit</button>
      </div>
    );
  }
}

Creator.defaultProps = {

}

export default Creator;
