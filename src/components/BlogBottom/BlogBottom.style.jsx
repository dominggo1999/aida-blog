import tw, { styled } from 'twin.macro';

export const BlogBottomWrapper = styled.div`
  ${tw`
    flex 
    flex-wrap
  `}
`;

export const TagsHeader = styled.p`
  ${tw`
    font-sans-pro 
    font-semibold
    text-2xl  
    my-5 
  `}
`;

export const Tags = styled.div`
  ${tw`
    flex  
    flex-wrap 
    mb-5 
    lg:mb-0
    w-full
    lg:w-2/3 
  `} 

  button {
    ${tw`
      mr-2 
      mb-2
    `}
  }
`;

export const ShareAction = styled.ul`
  ${tw` 
    w-full
    lg:w-1/3
    flex
    items-end 
    text-lg 
    font-sans-pro 
    mb-2 
    pb-2
  `}
`;

export const ShareActionRow = styled.div`
  ${tw`
    flex 
    items-center
  `}
`;

export const ShareActionText = styled.p`
  ${tw`
    font-semibold
  `}
`;

export const ShareActionList = styled.div`
  ${tw`
    flex 
    ml-2 
    sm:ml-5
  `}
`;

export const ShareButton = styled.a`
  ${tw` 
    text-base
    rounded-lg 
    mr-2 
    p-2
    bg-brand-1
  `}
`;
