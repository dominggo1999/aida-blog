import short from 'short-uuid';
import React from 'react';
import Posts from '../../components/Posts/Posts';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { popularPosts } from '../../data/popularPosts';
import PostCard from '../../components/PostCard/PostCard';
import { PopularPostsWrapper } from './PopularPosts.style';
import Container from '../../components/Wrapper/Container';

const PopularPosts = () => {
  return (
    <PopularPostsWrapper>
      <Container>
        <SectionHeader>
          Trending Topic
        </SectionHeader>
        <Posts col={3}>
          {
            popularPosts && popularPosts.map((item) => {
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
