import tw, { styled } from 'twin.macro';

export const BlogHeaderWrapper = styled.div`
  ${tw`
    flex
    w-full 
    justify-center
    mt-20
    mb-10
  `}
`;

export const Flex = styled.div`
  ${tw`
    flex
    items-center 
  `}
`;

export const HeaderTop = styled.div`
  ${tw`
    flex
    justify-between 
    w-full 
    items-center  
    text-semi-black
  `}
`;

export const HeaderDate = styled.div`
  ${tw`
    text-base
    font-semibold 
    font-sans-pro 
    ml-3
  `}
`;

export const HeaderReadingTime = styled.p`
  ${tw`
    flex
    items-center
    text-base
    font-semibold 
    font-sans-pro 
    ml-3
  `}

  svg {
    ${tw`
      text-2xl
      mr-1
    `}
  }
`;

export const HeaderTitle = styled.h1`
  ${tw`
    font-bold
    pt-4
    pb-6
    lg:text-5xl
    lg:leading-extra
    text-4xl
    font-poppins
    leading-extra
  `}
`;

export const HeaderImage = styled.div`
  ${tw`
    w-full 
    flex 
    justify-center
    relative
  `}
`;
