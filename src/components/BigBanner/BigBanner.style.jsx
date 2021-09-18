import tw, { styled } from 'twin.macro';

export const BigBannerWrapper = styled.main`
  ${tw`
    flex
    w-full
    justify-center
    mt-24
  `}
`;

export const BannerCarousel = styled.div`
  ${tw`
    flex
    w-full
    flex-wrap
    relative
    bg-white
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
