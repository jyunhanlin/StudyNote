import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Notes from '../Notes';
import About from '../About';


function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Notes} />
      <Route path="/about" component={About} />
      <Route path="/notes" component={Notes} />
    </Switch>
  );
}

export default Main;
