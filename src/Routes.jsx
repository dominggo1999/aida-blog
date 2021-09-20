import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Page404 from './pages/Page404';

/*
  url/blog => blog utama page 1 (recent post)
  url/blog/page/pageNumber => blog in page number x
  url/category/categoryID =>blog dengan category tertenty page 1
  url/tag/tagID
*/

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
        <Route
          exact
          path="/blog/page/:pageNumber"
        >
          <Blog />
        </Route>
        <Route
          exact
          path="/blog/:slug"
        >
          <BlogSingle />
        </Route>

        {/* 404 PAGE */}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
