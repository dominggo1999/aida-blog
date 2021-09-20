import tw, { styled } from 'twin.macro';
import { breakpoints } from '../constants/tailwindBreakpoint';

export const NotFoundWrapper = styled.div`
  ${tw`
    w-full 
    flex 
    justify-center 
    h-screen
    bg-brand-3
  `}

  min-height: 500px;
`;

export const NotFound = styled.div`
  ${tw`
    flex  
    flex-col
    items-center 
    justify-center  
    h-full
    select-none 
  `}
`;

export const NotFoundText = styled.h1`
  ${tw`
    font-poppins 
    text-semi-black
    text-7xl
  `}

  @media screen and (min-width:${breakpoints.md}px){
    font-size: 140px;
    line-height: 130px;
  }
`;

export const NotFoundMessage = styled.p`
  ${tw`
    font-poppins
    md:text-2xl 
    text-lg
    uppercase
    font-semibold
    mb-4
  `}
`;

export const NotFoundDescription = styled.p`
  ${tw`
    font-sans-pro 
    md:text-lg 
    text-base
    text-center
    w-full
    md:w-1/2
    font-semibold
    mb-6
  `}
`;
