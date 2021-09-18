import tw, { styled } from 'twin.macro';

export const SidebarWrapper = styled.div`
  ${tw`
    w-full
    pl-0
    xl:w-1/3
    xl:pl-5
  `}
`;

export const CategoriesWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-between
  `}

  a{
    width: 48%;
  }
`;
