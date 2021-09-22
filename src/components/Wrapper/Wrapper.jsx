import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    flex
    w-full 
    justify-center 
  `}

  ${(props) => props.brand4 && tw`bg-brand-4`}
`;
