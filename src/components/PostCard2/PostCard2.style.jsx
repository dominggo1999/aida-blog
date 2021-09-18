import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.article`
  ${tw`
    flex
    flex-col
    md:flex-row
    w-full
    rounded-3xl
    overflow-hidden
    mb-10
    shadow-button
  `}
`;

export const CardImage = styled.div`
  ${tw`
    w-full
    md:w-5/12
    relative
  `}

  min-height: 200px;
`;

export const CardContent = styled.div`
  ${tw`
    w-full
    md:w-7/12 
    p-7
    justify-start
  `}
`;

export const CardTitle = styled.div`
  ${tw`
    font-sans-pro 
    text-2xl
    font-semibold
    mt-5
  `}
`;

export const CardDate = styled.div`
  ${tw`
    mt-5
    md:mt-10
    font-semibold
    font-poppins
    italic
    text-sm
    text-gray-3
  `}
`;

export const CardTimeToRead = styled.div`
  ${tw`
    font-sans-pro
    font-semibold
    text-sm
    text-gray-3
  `}
`;
