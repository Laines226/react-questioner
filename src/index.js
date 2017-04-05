import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import QuizApp from './components/QuizApp';
import Creator from './components/Creator';

ReactDOM.render(
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact path="/quizzes/" component={App} />
      <Route path="/quizzes/:quizFile" component={QuizApp} />
      <Route path="/create" component={Creator} />
    </div>
  </Router>,
  document.getElementById('root')
);
