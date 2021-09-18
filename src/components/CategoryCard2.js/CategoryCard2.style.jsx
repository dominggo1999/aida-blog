import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    overflow-hidden 
    rounded-3xl 
    mb-5
    relative
    w-full
  `}

  height: 160px;
`;

export const CardImageWrapper = styled.div`
  ${tw`
    relative
    w-full
    h-full
  `}
`;

export const CardOverlay = styled.div`
  ${tw`
    w-full
    h-full
    absolute
    inset-0
    z-10
  `}

  background-image: linear-gradient( rgba(0,0,0,.1) 10%,rgba(0,0,0,.7) 70%);
`;

export const CardTitle = styled.p`
  ${tw`
    font-poppins
    font-semibold
    text-lg
    text-white
    text-center
    absolute
    z-50
    self-end
    flex
    items-end 
    justify-center
    w-full 
    h-full
    pb-5
  `}
`;
