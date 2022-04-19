import React, { useState, useEffect } from 'react';
import BigBanner from '../../components/BigBanner/BigBanner';
import { MainPosts } from '../../data/main';
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';
import SpinnerFullScreen from '../../components/SpinnerFullscreen/SpinnerFullscreen';

const MainBanner = () => {
  const [blog, setBlog] = useState();
  const [error, setError] = useState(false);

  const getBlog = async (isSubscribed) => {
    try {
      const res = await client.getEntries({
        content_type: 'heroSlider',
      });

      const entries = res.includes.Entry.map((i) => {
        const fields = i.fields;
        return {
          ...fields,
          uploadedDate: i.sys.createdAt,
          id: i.sys.id,
        };
      });

      // console.log(entries);

      const final = await postListToSliderData(entries);

      if(isSubscribed) {
        setBlog(final);
      }
    } catch (error) {
      if(isSubscribed) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    getBlog(isSubscribed);

    return () => {
      isSubscribed = false;
    };
  }, []);

  if(error) {
    return null;
  }

  if(!blog) {
    return <SpinnerFullScreen />;
  }

  return (
    <BigBanner
      blog={blog}
      posts={MainPosts}
    />
  );
};

export default MainBanner;
