import tw, { styled } from 'twin.macro';

export const AboutMeWrapper = styled.div`
  ${tw`
    w-full 
    flex  
    flex-wrap
    my-10
  `}
`;

export const AboutMeImage = styled.div`
  ${tw`
    w-full
    md:w-1/3 
    relative 
    rounded-3xl 
    overflow-hidden
  `} 

  min-height: 500px; 
  max-height: 500px;
`;

export const SocialLinks = styled.div`
  ${tw`
    flex
    absolute 
    text-2xl
  `}
  left: 50%;
  transform: translateX(-50%);
  bottom :20px;
`;

export const AboutMeDetail = styled.div`
  ${tw`
    w-full
    pl-0  
    md:pl-5
    py-10
    md:w-2/3
  `}
`;

export const Header = styled.div`
  ${tw`
    relative  
    mb-10
  `}
`;

export const Hello = styled.p`
  ${tw`
    text-5xl 
    text-brand-1 
    font-bold 
    mb-3 
  `}
`;

export const HeaderTitle = styled.h1`
  ${tw`
    font-poppins 
    text-4xl 
    font-semibold 
    relative 
  `}
`;

export const DetailContent = styled.div`
  ${tw`
    flex  
    flex-wrap
    w-full
  `}
`;

export const DetailColumn = styled.p`
  ${tw`
    font-sans-pro 
    text-semi-black 
    w-full
    xl:w-1/2 
    text-lg
  `} 

  &:nth-child(1){
    ${tw`xl:pr-2`}
  }
  
  &:nth-child(2){
    ${tw`xl:pl-2`}
  }

  p {
    ${tw`mb-5`}
  }
`;
