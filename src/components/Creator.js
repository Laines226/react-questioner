import React, { Component } from 'react';
import Quiz from './Quiz'

class Creator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }

  }
  render() {
    return (
      <div className="App">
        <Quiz normalQuiz={false} /> 
      </div>
    );
  }
}

export default Creator;
