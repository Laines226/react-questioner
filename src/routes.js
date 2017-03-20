import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Creator from './components/Creator';
import QuizApp from './components/QuizApp';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/create" component={Creator} />
    <Route path="/quiz" component={QuizApp} />
    <Route path="*" component={App} />
  </Router>
);

export default Routes;