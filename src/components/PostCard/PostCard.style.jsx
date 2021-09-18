import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoint';

const calculateCols = (col) => {
  if(col === 3) {
    return 31.5;
  }

  if(col === 2) {
    return 48;
  }
};

export const CardTitle = styled.p`
  ${tw`
    text-xl
    cursor-pointer
    inline
  `}

  ${(props) => props.readTime && tw`mb-5`}
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 500ms;
`;

export const CardWrapper = styled.article`
  ${tw`
    flex 
    flex-col
    overflow-hidden
    rounded-2xl
    shadow-button
    mb-8
    w-full
    relative
  `}
    
    
  @media screen and (min-width: ${breakpoints.sm}px) {
    width: 48%;
  }

  @media screen and (min-width: ${breakpoints.xl}px) {
    width: ${(props) => calculateCols(props.col)}%;
  }


  &:hover ${CardTitle} {
    background-size: 100% 2px;
  } 

  img {
    transition: transform ease-in-out 500ms;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

export const CardImage = styled.div`
  ${tw`
    relative
    w-full
  `}

  height: 200px;

  button {
    ${tw`
      z-50 
      absolute
      ml-2 
      mt-2
    `}
  }
`;

export const CardContent = styled.div`
  ${tw`
    p-8
    font-sans-pro
    font-semibold
    flex 
    flex-col
  `}
`;

export const CardDate = styled.p`
  ${tw`
    text-gray-2
    mb-2
  `}
`;

export const CardTime = styled.p`
  ${tw`
    text-sm
    text-right
    absolute
    bottom-0
    right-0
    p-3
    bg-brand-2
    rounded-tl-3xl
  `}
`;

export const Test = styled.a`
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  transition: background-size .3s;
  margin-top: 200px;
`;
