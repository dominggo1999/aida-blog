import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import React from 'react';
import {
  CardWrapper, ImageWrapper, CardName, CardDescription, SocialLinks,
} from './AboutWriterCard.style';
import { AidaImage } from '../Wrapper/AidaImage';

const authorImage = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const AboutWriterCard = () => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <AidaImage>
          <img
            src={authorImage}
            alt="Cool"
          />
        </AidaImage>
      </ImageWrapper>
      <CardName>Aida Jasmine</CardName>
      <CardDescription>Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit, sed do mod tempor incididunt ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</CardDescription>
      <SocialLinks>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <AiOutlineInstagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/"
        >
          <AiOutlineTwitter />
        </a>
      </SocialLinks>
    </CardWrapper>
  );
};

export default AboutWriterCard;
