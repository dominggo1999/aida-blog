import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeBlock } from './BlogRender.style';
import { flattenBlogNodeText } from '../../util/flattenBlogNodeText';

const BlogCodeBlock = ({ codeBlockData }) => {
  const codeList = codeBlockData.code.content;
  const codeString = flattenBlogNodeText(codeList);

  return (
    <CodeBlock>
      <SyntaxHighlighter
        language={codeBlockData.language}
        style={vs2015}
      >
        {codeString}
      </SyntaxHighlighter>
    </CodeBlock>
  );
};

export default BlogCodeBlock;
