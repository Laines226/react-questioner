import React, { Component } from 'react';
// import data from v;
import Quiz from './Quiz';

class QuizApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentQuestionId: 0,
      answers: []
    };
    this.data = require('../../public/' + props.match.params.quizFile);
    console.log("constructor QuizApp [this.data]", this.data);
  }
  handleAnswerClick = (questionId, answerId) => {
    if (this.state.answers[questionId] === undefined) {
      let answers = [...this.state.answers,
      {
        "questionId": questionId,
        "answerId": answerId,
        "right": (this.data.questions[questionId].rightAnswerId === answerId)
      }

      ];
      this.setState({ answers: answers });
    }
    setTimeout(this.nextQuestion, 1000);
  }
  nextQuestion = () => {
    this.setState((prevState) => ({ currentQuestionId: prevState.currentQuestionId + 1 }));
  }
  getSymbol = (index) => {
    let answer = this.state.answers[this.state.currentQuestionId];
    console.log("getSymbol [option]", index);
    if (!answer || index !== answer.answerId) {
      return <span>&#9744;</span>;
    }
    else if (answer.right) {
      return <span>&#9745;</span>;
    }
    else {
      return <span>&#9746;</span>;
    }
  }
  render() {
    console.log("App [data], [answers]", this.data, this.state.answers);
    const questions = this.data.questions;
    let quiz = questions[this.state.currentQuestionId];

    let noRightAnswers = 0;
    if (this.state.answers.length > 0) {
      noRightAnswers = this.state.answers.reduce((acc, val) => {
        acc = val.right ? acc + 1 : acc;
        return acc;
      }, 0);
    }
    let score = <p>You answered {noRightAnswers} of {this.state.answers.length} questions right</p>;


    return (
      <div className="App">
        <div className="App-header" />
        {
          this.state.currentQuestionId === questions.length ? score :
            <div>
              <p>{(this.state.currentQuestionId + 1)}/{questions.length}</p>
              <Quiz quiz={quiz} getSymbol={this.getSymbol} onAnswerClick={this.handleAnswerClick} />

            </div>
        }
      </div>
    );
  }
}

export default QuizApp;
