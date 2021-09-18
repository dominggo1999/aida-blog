import React from 'react';
import { PostsGrid, PostsListWithSidebar } from './Posts.style';

const Posts = ({ col, children, withSidebar }) => {
  if(withSidebar) {
    return (
      <PostsListWithSidebar>
        {children}
      </PostsListWithSidebar>
    );
  }

  const childrenWithColProps = children.map((child, index) => {
    return React.cloneElement(child, {
      col,
    });
  });

  return (
    <PostsGrid>
      {childrenWithColProps}
    </PostsGrid>
  );
};

export default Posts;
