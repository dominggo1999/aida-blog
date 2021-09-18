import tw, { styled } from 'twin.macro';

export const PostsGrid = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-between
  `}
`;

export const PostsListWithSidebar = styled(PostsGrid)`
  ${tw`
    w-full
    xl:w-2/3
    pr-0
    xl:pr-5
  `}
`;
