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
  `}

  input, textarea {
    ${tw`
      mr-0 
      mb-5  
    `}
  }
`;

export const FormTop = styled.div`
  ${tw`flex flex-wrap justify-between`} 

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
