import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`
    flex 
    flex-col 
    w-full
    px-5
    sm:px-10
    lg:px-32 
    mx-auto
  `}

  max-width: 1400px;
`;

export default Container;
