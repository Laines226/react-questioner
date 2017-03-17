import React, { Component } from 'react';
import data from './test.json';
import Quiz from './compontens/Quiz'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentQuestionId: 0,
      answers: []
    }

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  handleAnswerClick(questionId, answerId) {
    let answers = this.state.answers;
    if (answers[questionId] === undefined) {
      let answer = {
        "questionId": questionId,
        "answerId": answerId,
        "right": (data.data.questions[questionId].rightAnswerId === answerId)
      }
      answers.push(answer);
    }
    this.setState({ answers: answers });
    setTimeout(this.nextQuestion, 1000);
  }
  nextQuestion() {
    let currentQuestionId = this.state.currentQuestionId;
    currentQuestionId++;
   //if (currentQuestionId < data.data.questions.length) {
      this.setState({ currentQuestionId: currentQuestionId });
    //}
  }
  render() {
    console.log("App [data], [answers]", data.data, this.state.answers);
    const questions = data.data.questions;
    let quiz = questions[this.state.currentQuestionId];

    let noRightAnswers = 0;
    if (this.state.answers.length > 0) {
      noRightAnswers = this.state.answers.reduce((acc, val) => {
        acc = val.right ? acc+1 : acc;
        return acc;
      }, 0);
    }
    let score = <p>You answered {noRightAnswers} of {this.state.answers.length} questions right</p>
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my Questioner</h2>
        </div>
        {this.state.currentQuestionId === questions.length ? score :
          <div>
            <p>{(this.state.currentQuestionId + 1)}/{questions.length}</p>
            <Quiz quiz={quiz} answer={this.state.answers[this.state.currentQuestionId]} onAnswerClick={this.handleAnswerClick} />
          </div>
        }
      </div>
    );
  }
}

export default App;
