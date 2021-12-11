import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Container from '../../components/Wrapper/Container';
import { BlogContentWrapper } from './BlogContent.style';
import { ReadingSection } from '../../components/Wrapper/ReadingSection';
import { Content } from './BlogRender.style';
import { blogRenderOptions } from './BlogRenderOptions';

const BlogContent = ({ blog }) => {
  if(!blog) return null;
  const { content } = blog.fields;

  return (
    <Content>
      {documentToReactComponents(content, blogRenderOptions)}
    </Content>
  );
};

export default BlogContent;
