import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BlogList from '../containers/BlogList/BlogList';
import { popularPosts } from '../data/popularPosts';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import PageHeader from '../components/PageHeader/PageHeader';

const title = 'All articles';
const num = 20;

const Blog = () => {
  const a = useParams();
  console.log(a);

  return (
    <>
      <SpaceTop />
      <PageHeader
        title={title}
        num={num}
        blog
      />
      <BlogList posts={popularPosts} />
      <EditorsPicked />
    </>
  );
};

export default Blog;
