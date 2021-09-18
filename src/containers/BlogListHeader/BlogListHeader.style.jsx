import tw, { styled } from 'twin.macro';

export const BlogListHeaderWrapper = styled.div`
  ${tw`
    flex
    w-full
    justify-center
    mt-24
    bg-brand-4 
    py-12
    md:py-20
    font-sans-pro
  `}
`;

export const HeaderTitle = styled.h1`
  ${tw`
    relative
    text-4xl
    md:text-6xl
    font-poppins
    font-medium
    mb-10
  `}

`;

export const NumberOfArticles = styled.sub`
  ${tw`
    absolute
    text-base
    md:text-xl
    top-0
    font-sans-pro
    font-semibold
    text-gray-3
  `}

  transform: translate(10px,-5px);
`;

export const HeaderDescription = styled.div`
  ${tw`
    text-lg
    mb-5
    w-full
    md:w-1/2
  `}

`;

export const PageLink = styled.div`
  ${tw`
    flex
    justify-end
    text-gray-2
  `}
    
  a{
    ${tw`  
      font-semibold 
      text-gray-3
    `}
  }
`;
