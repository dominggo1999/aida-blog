import short from 'short-uuid';
import React, { useEffect, useState } from 'react';
import Posts from '../../components/Posts/Posts';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import PostCard from '../../components/PostCard/PostCard';
import { PopularPostsWrapper } from './PopularPosts.style';
import Container from '../../components/Wrapper/Container';
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';

const PopularPosts = () => {
  const [blog, setBlog] = useState();
  const [error, setError] = useState(false);

  const getBlog = async (isSubscribed) => {
    try {
      const res = await client.getEntries({
        content_type: 'blogPost',
        limit: 6,
        order: '-fields.views',
      });

      const entries = res.items.map((i) => {
        const fields = i.fields;
        return {
          ...fields,
          uploadedDate: i.sys.createdAt,
          id: i.sys.id,
        };
      });

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

  if(!blog) {
    return null;
  }

  return (
    <PopularPostsWrapper>
      <Container>
        <SectionHeader>
          Trending Topic
        </SectionHeader>
        <Posts col={3}>
          {
           !error && blog && blog.map((item) => {
             return (
               <PostCard
                 key={short.generate()}
                 post={item}
               />
             );
           })
          }
        </Posts>
      </Container>
    </PopularPostsWrapper>
  );
};

export default PopularPosts;
