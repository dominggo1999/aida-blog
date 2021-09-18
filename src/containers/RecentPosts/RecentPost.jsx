import short from 'short-uuid';
import React from 'react';
import Posts from '../../components/Posts/Posts';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { popularPosts } from '../../data/popularPosts';
import PostCard from '../../components/PostCard/PostCard';
import { RecentPostsWrapper } from './RecentPost.style';
import Container from '../../components/Wrapper/Container';

const RecentPost = () => {
  return (
    <RecentPostsWrapper>
      <Container>
        <SectionHeader>
          Recent Articles
        </SectionHeader>
        <Posts col={2}>
          {
            popularPosts && popularPosts.map((item) => {
              return (
                <PostCard
                  key={short.generate()}
                  post={item}
                  readTime
                />
              );
            })
          }
        </Posts>
      </Container>
    </RecentPostsWrapper>
  );
};

export default RecentPost;
