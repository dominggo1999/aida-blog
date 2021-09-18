import tw, { styled } from 'twin.macro';
import Button from '../Button/Button';

export const WelcomeWrapper = styled.div`
  ${tw`
    w-full flex justify-center
  `}
`;

export const WelcomeInner = styled.div`
  ${tw`
    w-full 
    flex
    flex-wrap
    my-10
  `}
`;

export const WelcomeHalf = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    text-center
    w-full
    lg:w-1/2
`}

  &:first-child{
    ${tw`lg:pr-2 pr-0 lg:mb-0 mb-10`}
  }
  &:last-child{
    ${tw`lg:pl-2 pl-0`}
  }
`;

export const WelcomeImageWrapper = styled.div`
  ${tw`
    w-full 
    relative
  `}

  height: 500px;
  min-height: 500px;

  /* Div itu adalah image wrapper dari next */
  div{
    ${tw`
      rounded-3xl 
      shadow-button 
      overflow-hidden
      bg-brand-1
    `}
    transition:transform ease-in-out 300ms;
  }


  /* TODO : disable hover on mobile */
  &:hover div{
    transform: rotate(-1deg) translateY(-3px);
  }
`;

export const WelcomeTitle = styled.h3`
  ${tw`
    leading-extra
    font-poppins
    font-semibold
    text-2xl
    mb-2
    opacity-70
  `}
`;

export const WelcomeContent = styled.p`
  ${tw`
    lg:px-10
    font-sans-pro
    text-lg
    py-1
    text-gray-3
  `}
`;

export const WelcomeButton = styled(Button)`
  ${tw`
    mt-2
  `}
`;

export const Signature = styled.p`
  ${tw`
      mt-5
      text-5xl
      font-windsong
      opacity-70
  `}

  transform: translateX(-20px);
`;
