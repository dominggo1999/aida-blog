import tw, { styled } from 'twin.macro';

export const SocialLink = styled.a`
  ${tw`
    bg-brand-1
      rounded-full
      flex
      items-center 
      justify-center
      mx-1
      border-2
      border-transparent
  `}

  width: 50px;
  height: 50px;
  transition : all ease-in-out 200ms;

  &:hover {
    ${tw`
      border-black
    `}
  }
`;
