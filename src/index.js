import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
      <Route component={NoMatch} />
    </div>
  </Router>,
  document.getElementById('root')
);


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)