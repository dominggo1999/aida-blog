import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoint';

export const CardWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    md:flex-row
    items-center 
    my-10
  `}
`;

export const ContentFlex = styled.div`
  ${tw`
    flex 
    flex-col
    items-center
    md:items-start
  `}
`;

export const CardLeft = styled(ContentFlex)`
  ${tw`
    w-full
    md:w-1/3
    mb-5 
    md:mb-0 
  `}
`;

export const CardRight = styled(ContentFlex)`
  ${tw`
    w-full
    md:w-2/3
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    relative
    rounded-3xl
    overflow-hidden
  `}

  width: 200px;
  height: 200px;
`;

export const CardName = styled.p`
  ${tw`
    font-poppins
    text-2xl
    font-semibold
    mb-3
  `}
`;

export const CardDescription = styled.p`
  ${tw`
    font-sans-pro
    mb-5
    text-center 
    md:text-left
  `}
`;

export const SocialLinks = styled.div`
  ${tw`
    flex
    text-center
    text-xl
  `}

  a {
    ${tw`
      bg-brand-1
      rounded-full
      flex
      items-center 
      justify-center
      mr-2
      border-2
      border-transparent
    `}
    width: 35px;
    height: 35px;
    transition : all ease-in-out 200ms;
  }

  a:hover {
    ${tw`
      border-black
    `}
  }
`;
