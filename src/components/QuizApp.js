import React, { Component } from 'react';
import data from '../test.json';
import Quiz from './Quiz'

class QuizApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentQuestionId: 0,
      answers: []
    }
  }
  handleAnswerClick = (questionId, answerId) => {
    if (this.state.answers[questionId] === undefined) {
      let answers = [...this.state.answers,
      {
        "questionId": questionId,
        "answerId": answerId,
        "right": (data.data.questions[questionId].rightAnswerId === answerId)
      }

      ]
      this.setState({ answers: answers });
    }
    setTimeout(this.nextQuestion, 1000);
  }
  nextQuestion = () => {
    this.setState((prevState) => ({ currentQuestionId: prevState.currentQuestionId + 1 }));
  }
  render() {
    console.log("App [data], [answers]", data.data, this.state.answers);
    const questions = data.data.questions;
    let quiz = questions[this.state.currentQuestionId];

    // let noRightAnswers = 0;
    // if (this.state.answers.length > 0) {
    //   noRightAnswers = this.state.answers.reduce((acc, val) => {
    //     acc = val.right ? acc + 1 : acc;
    //     return acc;
    //   }, 0);
    // }
    // let score = <p>You answered {noRightAnswers} of {this.state.answers.length} questions right</p>

    // {this.state.currentQuestionId === questions.length ? score :
    //     }
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div>
          <p>{(this.state.currentQuestionId + 1)}/{questions.length}</p>
          <Quiz quiz={quiz} answer={this.state.answers[this.state.currentQuestionId]} onAnswerClick={this.handleAnswerClick} />
        </div>
      </div>
    );
  }
}

export default QuizApp;
