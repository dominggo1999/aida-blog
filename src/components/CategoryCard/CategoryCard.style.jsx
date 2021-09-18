import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    relative
    rounded-2xl
    cursor-pointer
  `}

  height: 200px;
  width: 200px;
`;

export const ImageWrapper = styled.div`
  ${tw`
    relative
    w-full
    h-full
    overflow-hidden
    rounded-2xl
  `}

  img{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(80%);
  }

`;

export const CardOverlay = styled.div`
  ${tw`
    h-full
    w-full
    absolute
    z-20
  `}

  background: linear-gradient(0deg, rgba(73,85,53,0.7819502801120448) 0%, rgba(131,200,143,0.7875525210084033) 55%, rgba(122,163,129,1) 100%);
`;

export const CategoryText = styled.div`
  ${tw`
    absolute
    z-50
    top-0
    w-full
    justify-center
    font-poppins
    text-2xl
    uppercase
    font-semibold
    text-white
    opacity-90
  `}

  p {
    ${tw`
      ml-3 mt-3
    `}
  }
`;
