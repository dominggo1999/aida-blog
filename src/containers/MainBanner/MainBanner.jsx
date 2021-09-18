import React from 'react';
import BigBanner from '../../components/BigBanner/BigBanner';
import { MainPosts } from '../../data/main';

const MainBanner = () => {
  return (
    <BigBanner posts={MainPosts} />
  );
};

export default MainBanner;
