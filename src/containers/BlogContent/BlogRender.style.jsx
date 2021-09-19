import tw, { styled } from 'twin.macro';

export const Content = styled.div`
  ${tw`
    font-sans-pro 
    text-base
    md:text-lg
    break-words
  `}

  h1,h2,h3,h4,h5,h6 {
    ${tw`
      font-poppins
      font-semibold
      mb-3
    `}
  }
`;

export const Heading3 = styled.h3`
  ${tw`
    text-4xl
  `}
`;

export const Heading4 = styled.h4`
  ${tw`
    text-3xl
  `}
`;

export const Heading5 = styled.h5`
  ${tw`
    text-2xl
  `}
`;

export const Heading6 = styled.h6`
  ${tw`
    text-xl
  `}
`;

export const Paragraph = styled.p`
  ${tw`
    mb-8 
  `}
`;

export const Hyperlink = styled.a`
  ${tw`
    text-green-700
    font-medium 
  `}
`;

export const CodeBlock = styled.div`
  ${tw`
    text-sm
    mb-8
  `}
`;
