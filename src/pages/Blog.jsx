import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BlogList from '../containers/BlogList/BlogList';
import { popularPosts } from '../data/popularPosts';
import EditorPicked from '../containers/EditorPicked/EditorPicked';

import { SpaceTop } from '../components/Wrapper/SpaceTop';
import PageHeader from '../components/PageHeader/PageHeader';
import useGetBlogList from '../hooks/useGetBlogList';
import SpinnerFullScreen from '../components/SpinnerFullscreen/SpinnerFullscreen';

const title = 'All articles';
const num = 20;

const Blog = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [blogList, total, pageTitle, error] = useGetBlogList(params, setLoading);

  if(loading) {
    return <SpinnerFullScreen />;
  }

  if(error) {
    return null;
  }

  return (
    <>
      <SpaceTop />
      <PageHeader
        title={pageTitle}
        num={total}
        blog
      />
      <BlogList
        posts={blogList}
        total={total}
        params={params}
      />
      <EditorPicked />
    </>
  );
};

export default Blog;
