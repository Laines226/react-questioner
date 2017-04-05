import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import all from '../../../public/all.json';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        {
          all.quizzes.map((quiz) => {
            return <Link to={`/quizzes/${quiz.file}`} key={quiz.id}>{quiz.title} </Link>;
          })
        }
        <Link to={`/create`}>create your own</Link>
      </div>
    );
  }
}

export default App;
