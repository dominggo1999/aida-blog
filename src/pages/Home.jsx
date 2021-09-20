import React, { useState, useEffect } from 'react';
import MainBanner from '../containers/MainBanner/MainBanner';
import CategoryCards from '../containers/CategoryCards/CategoryCards';
import Welcome from '../components/Welcome/Welcome';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';
import PopularPosts from '../containers/PopularPosts/PopularPosts';
import RecentPosts from '../containers/RecentPosts/RecentPost';
import { SpaceTop } from '../components/Wrapper/SpaceTop';

const Homepage = () => {
  return (
    <>
      <SpaceTop />
      <MainBanner />
      <CategoryCards />
      <Welcome />
      <PopularPosts />
      <EditorsPicked />
      <RecentPosts />
    </>
  );
};

export default Homepage;
