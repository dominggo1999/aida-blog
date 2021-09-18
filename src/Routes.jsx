import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
        >
          <Home />
        </Route>
        <Route
          exact
          path="/blog"
        >
          <Blog />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
