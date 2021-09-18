import short from 'short-uuid';
import React from 'react';
import Container from '../../components/Wrapper/Container';
import { BlogListWrapper, List } from './BlogList.style';
import Posts from '../../components/Posts/Posts';
import PostCard2 from '../../components/PostCard2/PostCard2';
import BlogListSidebar from '../BlogListSidebar/BlogListSidebar';

// State nya harus di pass dari page, bukan disini, karena untuk list blog dari category atau tag tertentu pakainya blog list ini juga

const BlogList = ({ posts }) => {
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
          </Posts>
          <BlogListSidebar />
        </List>
      </Container>
    </BlogListWrapper>
  );
};

export default BlogList;
