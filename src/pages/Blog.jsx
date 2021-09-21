import React from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../containers/BlogList/BlogList';
import { popularPosts } from '../data/popularPosts';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import PageHeader from '../components/PageHeader/PageHeader';

const title = 'All articles';
const num = 20;

const Blog = ({ inCategory, inTag }) => {
  const { pageNumber } = useParams();

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
