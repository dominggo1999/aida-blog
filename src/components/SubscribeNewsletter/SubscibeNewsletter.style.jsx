import tw, { styled } from 'twin.macro';
import { Element } from 'react-scroll';

export const SubscribeNewsLetterWrapper = styled(Element)`
  ${tw`
    w-full 
    flex 
    bg-brand-1
    justify-center
  `}
`;

export const Content = styled.div`
  ${tw`
    py-24
  `}
`;

export const ContentTop = styled.div`
  ${tw`
    mb-16
  `}
`;

export const ContentBottom = styled.div`
  ${tw`
    flex
    flex-wrap
  `}

  form{
    ${tw`
      flex 
      gap-x-1
      gap-y-6
      flex-wrap
      w-full 
      relative 
    `}
  }

  input {
    max-width: 400px;
    ${tw`
      shadow-button
      rounded-2xl
      outline-none 
      mr-0
      sm:mr-5
      md:mb-0
      w-full 
      px-4
      py-5
      text-xl
      font-bold
      text-gray-3 
      border-2 
      border-transparent
    `}

    transition: border ease-in-out 300ms;

    &:focus {
      ${tw`border-2 border-black`}
    }

    &::placeholder {
      ${tw`
        text-gray-2
      `}
    }
  }

  button {
    ${tw`
      px-3
      py-5
      text-2xl
      rounded-2xl
      shadow-button
    `}
  
    &:hover {
      ${tw`
        bg-brand-2
      `}
    }
  }
`;

export const SubscribeText = styled.h4`
  ${tw`
    flex 
    items-center
    font-sans-pro
    text-3xl
    font-bold
    text-gray-3
  `}

  svg{
    ${tw`
      mr-1
    `}
  }
`;

export const NewsletterText = styled.h3`
  ${tw`
    text-4xl
    font-poppins
    font-semibold
  `}
`;

export const SuccessMessage = styled.span`
  ${tw`
    relative 
    z-50 
    font-semibold 
    text-right 
    w-full 
    mt-[1px]
  `}
`;
