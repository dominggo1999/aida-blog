import tw, { styled } from 'twin.macro';

export const TitleWrapper = styled.div`
  ${tw`
    w-full
    relative
    py-3
  `}

  &:nth-child(1){
    ${tw`
      mb-5
    `}
  }
  
  &:not(:nth-child(1)){
    ${tw`
      my-5
    `}
  }

  &::after, &::before {
    ${tw`
      absolute
      bg-soft-gray
      bottom-0
    `}

    content: "";
    height: 3px;
  }

  &::after {
    ${tw`
      w-1/5
      bg-gray-3
    `}
  }
  
  &::before {
    ${tw`
      w-full
      bg-soft-gray
    `}
  }
`;

export const TitleText = styled.h5`
  ${tw`
    font-poppins
    font-semibold
  `}
`;
