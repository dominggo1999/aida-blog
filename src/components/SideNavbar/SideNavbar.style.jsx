import tw, { styled } from 'twin.macro';

export const SideNavbarWrapper = styled.ul`
  ${tw`
    fixed 
    h-screen
    right-0
    top-0
    z-50
    text-white
    bg-black
    transition-all
    ease-in-out
    duration-300
    p-10
    w-full
    sm:w-72
    overflow-auto
  `}

  min-height: 300px;
  z-index: 999;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
`;

export const NavItem = styled.li`
  ${tw`
    text-2xl
    cursor-pointer 
    py-5
  `}

  z-index: 9999;

`;

export const CloseButton = styled.button`
  ${tw`
    cursor-pointer
    flex 
    items-center 
    text-4xl
    absolute
    right-8
    top-8
  `}
  
  z-index: 99999;

  path {
    fill: white;
  }
`;
