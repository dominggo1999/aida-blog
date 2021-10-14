import React, { useState, useEffect } from 'react';
import MainBanner from '../containers/MainBanner/MainBanner';
import CategoryCards from '../containers/CategoryCards/CategoryCards';
import Welcome from '../components/Welcome/Welcome';
import PopularPosts from '../containers/PopularPosts/PopularPosts';
import RecentPosts from '../containers/RecentPosts/RecentPost';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import EditorPicked from '../containers/EditorPicked/EditorPicked';

const Homepage = () => {
  return (
    <>
      <SpaceTop />
      <MainBanner />
      <CategoryCards />
      <Welcome />
      <PopularPosts />
      <EditorPicked />
      <RecentPosts />
    </>
  );
};

export default Homepage;
