import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import React from 'react';
import {
  CardWrapper, ImageWrapper, CardName, CardDescription, SocialLinks, CardRight, CardLeft,
} from './AboutWriter2.style';
import { AidaImage } from '../Wrapper/AidaImage';
import { ReadingSection } from '../Wrapper/ReadingSection';
import Container from '../Wrapper/Container';

const authorImage = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const AboutWriterCard2 = () => {
  return (
    <Container>
      <ReadingSection>
        <CardWrapper>
          <CardLeft>
            <ImageWrapper>
              <AidaImage>
                <img
                  src={authorImage}
                  alt="Cool"
                />
              </AidaImage>
            </ImageWrapper>
          </CardLeft>
          <CardRight>
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
          </CardRight>
        </CardWrapper>
      </ReadingSection>
    </Container>
  );
};

export default AboutWriterCard2;
