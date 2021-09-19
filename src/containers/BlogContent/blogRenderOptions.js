import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import {
  Paragraph,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hyperlink,
} from './BlogRender.style';
import BlogCodeBlock from './BlogCodeBlock';

export const codeBlogOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
  },
};

export const blogRenderOptions = {
  renderNode: {
    // Image
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
    // Paragraph
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Paragraph>{children}</Paragraph>;
    },
    // Headings
    [BLOCKS.HEADING_3]: (node, children) => {
      return <Heading3>{children}</Heading3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <Heading4>{children}</Heading4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <Heading5>{children}</Heading5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <Heading6>{children}</Heading6>;
    },

    // Link
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      return (
        <Hyperlink
          target="_blank"
          rel="noopener noreferer"
          href={node.data.uri}
        >{children}
        </Hyperlink>
      );
    },

    // Codeblocl
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const codeBlockData = node.data.target.fields;
      return (
        <BlogCodeBlock codeBlockData={codeBlockData} />
      );
    },
  },
};
