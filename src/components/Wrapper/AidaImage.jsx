import tw, { styled } from 'twin.macro';

export const AidaImage = styled.div`
  ${tw`
    overflow-hidden
    absolute
    m-0
    block
    inset-0
  `}

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;
