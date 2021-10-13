import tw, { styled } from 'twin.macro';

export const Content = styled.div`
  ${tw`
    font-sans-pro 
    text-lg
    break-words
  `}

  h1,h2,h3,h4,h5,h6 {
    ${tw`
      font-poppins
      font-semibold
      mb-3
    `}
  }

  img {
    ${tw`mb-5`}
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

export const BlockQuote = styled.blockquote`
  ${tw`
    bg-brand-3
    p-5
    mb-8
    border-l-8 
    border-brand-1
    font-poppins
    text-base
  `}

  p{
    ${tw`
      mb-3
    `}
  }

  p:not(:nth-child(1)) {
    ${tw`
      m-0
    `}
  }

  p b {
    ${tw`font-semibold`}
  }
`;

export const UnonderedList = styled.ul`
  ${tw`
    list-disc
    ml-5
  `}

  p {
    ${tw`
      mb-2
    `}
  }
`;

export const OrderedList = styled.ol`
  ${tw`
    list-decimal
    ml-5
  `}

  p {
    ${tw`
      mb-2
    `}
  }
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
