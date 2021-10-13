import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import short from 'short-uuid';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Page404 from './pages/Page404';
import Contact from './pages/Contact';
import About from './pages/About';
import blogListPath from './constants/blogListPath';

/*
  url/blog => blog utama page 1 (recent post)
  url/blog/page/pageNumber => blog in page number x
  url/category/categoryID =>blog dengan category tertenty page 1
  url/tag/tagID
  url/category/categoryID/page/2 =>blog dengan category tertentu page 2
  url/tag/tagID/page/2 => blog dengan tag tertentu page 2
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
          path="/contact"
        >
          <Contact />
        </Route>
        <Route
          exact
          path="/about"
        >
          <About />
        </Route>

        {/* Blog List Path */}
        {
          blogListPath && blogListPath.map((path) => {
            return (
              <Route
                key={short.generate()}
                exact
                path={path}
              >
                <Blog />
              </Route>
            );
          })
        }

        {/* SinglePost */}
        <Route
          exact
          path="/post/:slug"
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
