import tw, { styled } from 'twin.macro';

export const NavbarWrapper = styled.div`
  ${tw`
    flex
    w-full
    py-5
    justify-center
    fixed
    top-0
    left-0
    bg-white
  `}

  transform: ${(props) => (props.showNavbar ? 'translateY(0)' : 'translateY(-100%)')};
  transition : transform ease 300ms;
  z-index: 100;
`;

export const NavLogo = styled.h1`
  ${tw`
    text-3xl
    md:text-4xl
    font-poppins
    font-bold
    mr-20
    cursor-pointer
  `}
`;

export const NavbarFlex = styled.div`
  ${tw`
    flex
    w-full
    items-center
    justify-between
  `}
`;
