import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoint';

export const ContactWrapper = styled.div`
  ${tw`
    w-full
    md:w-2/3 
    mt-10
    mb-20 
  `}

  button {
    ${tw`
      text-2xl
    `}
  }
`;

export const ContactTitle = styled.h2`
  ${tw`
    font-sans-pro 
    text-4xl 
    font-semibold
    mb-8
  `}
`;

export const Form = styled.form`
  ${tw`
    w-full  
    flex 
    flex-col 
    gap-y-6
  `}

  button{
    ${tw`
      self-start
    `}
  }

  textarea {
    min-height: 200px;
    max-height: 300px;
  }

  input, textarea {
    ${tw`
      shadow-button
      rounded-2xl
      outline-none 
      mr-0
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
`;

export const FormTop = styled.div`
  ${tw`
    flex 
    flex-wrap 
    justify-between 
    gap-y-6
  `} 

  div {
    ${tw`
      w-full
    `}
    
    @media screen and (min-width: ${breakpoints.lg}px){
      width : 48%;
    }
  }
`;

export const FormBottom = styled.div`
  textarea {
    ${tw`
      w-full 
    `}
  }
`;

export const ErrorMessage = styled.span`
  ${tw`
    absolute 
    right-0 
    top-full 
    text-sm 
    text-red-500 
    font-semibold
    z-50
  `}
`;

export const FormActions = styled.div`
  ${tw`
    flex  
    items-center
    gap-x-2 
  `}
  p{
    ${tw` 
      mt-2  
      font-medium
    `}
  }
`;
