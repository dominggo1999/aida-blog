import tw, { styled } from 'twin.macro';

export const Base = styled.button(({
  dark, primary, white, nav,
}) => {
  return [
    tw`
    self-center
    text-lg 
    font-sans-pro 
    px-4 py-2 
    rounded-lg
    focus:outline-none
    transition-colors 
    ease-in-out
    duration-100
    bg-black 
    hover:bg-brand-1 
    hover:text-black
    hover:shadow-button
    `,
    primary && tw`
    bg-brand-1 
    text-black 
    hover:bg-gray-3 
    hover:text-white`,
    white && tw`
    bg-white
    text-black 
    hover:bg-gray-3 
    hover:text-white`,
  ];
});

export const NavButton = styled(Base)`
  ${tw`text-white`}
`;

export const Btn = styled(Base)`
  ${tw`text-base `}
  background: ${(props) => (props.bg ? props.bg : null)};
`;
