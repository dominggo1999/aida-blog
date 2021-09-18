import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
  ${tw`
    w-full
    flex
    bg-black
    text-white
    justify-center
    pt-20
  `}
`;

export const FooterFlex = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
  `}
`;

export const FooterTop = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    justify-between
    mb-10
    items-center
  `}
`;

export const Logo = styled.a`
  ${tw`
    text-3xl
    md:text-4xl
    font-poppins
    font-bold
    cursor-pointer
    md:mb-0
  `}
`;

export const FooterTopRight = styled.div`
  ${tw`
    flex
    items-center
  `}
  
  button {
    ${tw`
      text-black 
      ml-4
      md:ml-10
      font-bold
      p-4
    `}
  }
`;

export const FooterTextBold = styled.h5`
  ${tw`
    text-2xl
    font-sans-pro
    font-semibold
  `}
`;

export const FooterTextSemiBold = styled.h6`
  ${tw`
    text-lg
    font-sans-pro
    font-semibold
    mb-2
  `}
`;

export const FooterText = styled.p`
  ${tw`
    font-sans-pro
    pr-10
    md:text-lg
    text-base
  `}

  padding-bottom: ${(props) => (props.withPadding ? '30px' : 0)};
`;

export const FooterContent = styled.div`
  ${tw`
    flex
    flex-wrap
    my-10
  `}
`;

export const ContentTitle = styled.div`
  ${tw`
    mb-5
    md:mb-10
  `}
`;

export const FooterCol = styled.div`
  ${(({ perFour }) => (perFour ? tw`md:w-1/4` : tw`md:w-1/3`))}

  ${tw`
    w-full
  `}

  &:not(:last-of-type){
    ${tw`md:mb-0 mb-10`}
  }

  &:last-of-type button{
    ${tw`
      mb-3
      mr-3
      capitalize
    `}
  }
`;

export const FooterLink = styled(FooterText)`
  ${tw`
    cursor-pointer
    hover:text-brand-1
    pb-2
  `}
`;

export const FooterBottom = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    w-full
    my-10
  `}
`;

export const FooterCopyright = styled.span`
  ${tw`
    font-poppins text-sm mx-auto
  `}
  
  a {
    ${tw`text-brand-1 font-semibold`}
  }
`;

export const Line = styled.div`
  ${tw`
    w-full 
    bg-brand-1
    opacity-20
  `}

  height : 1px;
`;
