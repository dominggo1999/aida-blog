import tw, { styled } from 'twin.macro';

export const Field = styled.div`
  ${tw`
    flex 
    flex-wrap
    w-full 
    relative 
  `}

  textarea {
    min-height: 200px;
    max-height: 300px;
  }

  input, textarea {
    ${tw`
      shadow-button
      rounded-2xl
      outline-none 
      mr-0
      sm:mr-5
      md:mb-0
      w-full 
      px-4
      py-5
      text-xl
      font-bold
      text-gray-3 
      border-2 
      border-transparent
    `}
    transition: border ease-in-out 300ms;

    &:focus {
      ${tw`border-2 border-black`}
    }

    &::placeholder {
      ${tw`
        text-gray-2
      `}
    }
  }
`;
