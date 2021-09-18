import tw, { styled } from 'twin.macro';

export const EditorsPickedWrapper = styled.div`
  ${tw`
    flex w-full 
    justify-center
    bg-brand-4
    py-10
  `}
`;

export const Carousel = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    relative
  `}
`;

export const Arrow = styled.button`
  ${tw`
    hidden
    lg:flex
    absolute
    z-50
    items-center
    justify-center
    rounded-full
    p-2
    text-xl
    text-black
    opacity-60
    hover:opacity-90
    focus:outline-none
  `}
  top : 50%;
  transform: translateY(-50%);
  border : solid 3px black;
`;

export const NavigationPrev = styled(Arrow)`
  left : -55px;
  `;
export const NavigationNext = styled(Arrow)`
  right : -55px; 
`;
