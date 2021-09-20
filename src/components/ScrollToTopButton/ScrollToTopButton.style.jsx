import tw, { styled } from 'twin.macro';
import Button from '../Button/Button';

export const ScrollButton = styled(Button)`
  ${tw`
    bg-brand-1
    fixed
    z-30
    p-3 
    shadow-button-2 
    hover:shadow-button-2
  `}
  bottom: 20px;
  right: 20px;
  transition: transform ease-in-out 100ms;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
