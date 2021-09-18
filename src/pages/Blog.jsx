import React from 'react';
import BlogListHeader from '../containers/BlogListHeader/BlogListHeader';
import BlogList from '../containers/BlogList/BlogList';
import { popularPosts } from '../data/popularPosts';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';

const title = 'All articles';
const num = 20;

const Blog = () => {
  // Fetch blog list information here

  return (
    <>
      <BlogListHeader
        title={title}
        num={num}
      />
      <BlogList posts={popularPosts} />
      <EditorsPicked />
    </>
  );
};

export default Blog;
