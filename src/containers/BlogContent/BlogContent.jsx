import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from '../../components/Wrapper/Container';
import { BlogContentWrapper } from './BlogContent.style';
import { ReadingSection } from '../../components/Wrapper/ReadingSection';
import { Content } from './BlogRender.style';
import { blogRenderOptions } from './blogRenderOptions';

const BlogContent = ({ blog }) => {
  if(!blog) return null;
  const { content } = blog.fields;

  return (
    <BlogContentWrapper>
      <Container>
        <ReadingSection>
          <Content>
            {documentToReactComponents(content, blogRenderOptions)}
          </Content>
          <hr />
        </ReadingSection>
      </Container>
    </BlogContentWrapper>
  );
};

export default BlogContent;
