import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    w-full
    mb-4
    flex
  `}
`;

export const CardImage = styled.div`
  ${tw`
    relative 
    rounded-xl
    overflow-hidden
  `}

  width: 115px;
  min-width: 115px;
  min-height: 115px;
`;

export const CardContent = styled.div`
  ${tw`
    pl-2
    flex 
    flex-col 
    justify-center
  `}
`;

export const CardTitle = styled.p`
  ${tw`
    font-sans-pro 
    text-lg
    xl:text-base
    font-semibold
    mb-3
  `}
`;

export const CardDate = styled.div`
  ${tw`
    font-semibold
    font-poppins
    text-sm
    text-gray-2
  `}
`;
