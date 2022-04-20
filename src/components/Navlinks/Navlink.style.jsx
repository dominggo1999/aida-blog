import tw, { styled } from 'twin.macro';

export const NavlinksFlex = styled.ul`
  ${tw`
    justify-between
    w-full
    hidden
    md:flex
  `}
`;

export const NavlinksWrapper = styled.div`
  ${tw`
    flex
    items-center
    font-poppins
  `}
`;

export const NavItemLeft = styled.li`
  ${tw`
    px-5
    font-semibold
    cursor-pointer
  `}
`;

export const MenuButton = styled.div`
  ${tw`
    flex
    items-center
    md:hidden
  `}
`;
