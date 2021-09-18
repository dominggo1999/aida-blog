import React from 'react';
import { useParams } from 'react-router-dom';
import BlogListHeader from '../containers/BlogListHeader/BlogListHeader';
import BlogList from '../containers/BlogList/BlogList';
import { popularPosts } from '../data/popularPosts';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';

const title = 'All articles';
const num = 20;

const Blog = ({ inCategory, inTag }) => {
  const { pageNumber } = useParams();

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
