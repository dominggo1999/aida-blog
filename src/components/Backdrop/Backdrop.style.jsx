import tw, { styled } from 'twin.macro';

export const Overlay = styled.div`
  ${tw`
    fixed 
    w-full
    h-screen
    left-0
    top-0
    bg-black
    opacity-50
  `}

  z-index: 888;
`;
