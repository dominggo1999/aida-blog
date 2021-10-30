import short from 'short-uuid';
import React from 'react';
import Container from '../../components/Wrapper/Container';
import { BlogListWrapper, List } from './BlogList.style';
import Posts from '../../components/Posts/Posts';
import PostCard2 from '../../components/PostCard2/PostCard2';
import BlogListSidebar from '../BlogListSidebar/BlogListSidebar';
import Pagination from '../../components/Pagination/Pagination';

const BlogList = ({ posts, params, total }) => {
  return (
    <BlogListWrapper>
      <Container>
        <List>
          <Posts withSidebar>
            {
              posts && posts.map((post) => {
                return(
                  <PostCard2
                    key={short.generate()}
                    post={post}
                  />
                );
              })
            }
            {
              total > 0
              && (
              <Pagination
                params={params}
                total={total}
              />
              )
            }
          </Posts>
          <BlogListSidebar />
        </List>
      </Container>
    </BlogListWrapper>
  );
};

export default BlogList;
