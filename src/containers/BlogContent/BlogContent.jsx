import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Container from '../../components/Wrapper/Container';
import { BlogContentWrapper } from './BlogContent.style';

const BlogContent = ({ blog }) => {
  if(!blog) return null;

  const { content } = blog.fields;

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    },
  };

  return (
    <BlogContentWrapper>
      <Container>
        {documentToReactComponents(content, renderOptions)}
      </Container>
    </BlogContentWrapper>
  );
};

export default BlogContent;
