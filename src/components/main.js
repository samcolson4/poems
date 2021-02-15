import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import About from './pages/about/about.js'
import NotFoundRoute from './pages/NotFoundRoute.js'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route path="*" component={NotFoundRoute} />
    </Switch>
  );
}

export default Main;
