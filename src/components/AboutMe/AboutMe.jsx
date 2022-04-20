import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import React from 'react';
import Container from '../Wrapper/Container';
import { Wrapper } from '../Wrapper/Wrapper';
import {
  AboutMeWrapper, AboutMeDetail, AboutMeImage, Header, Hello, HeaderTitle, DetailContent,
  DetailColumn, SocialLinks,
} from './AboutMe.style';
import { AidaImage } from '../Wrapper/AidaImage';
import { SocialLink } from '../SocialLink/SocialLink.style';

const AboutMe = () => {
  return (
    <Wrapper>
      <Container>
        <AboutMeWrapper>
          <AboutMeImage>
            <AidaImage>
              <img
                src="https://images.pexels.com/photos/5409772/pexels-photo-5409772.jpeg?auto=compress&cs=tinysrgb&w=400&dpr=1"
                alt="Me"
              />
            </AidaImage>
            <SocialLinks>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/"
              >
                <AiFillLinkedin />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
              >
                <AiOutlineInstagram />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/"
              >
                <AiOutlineTwitter />
              </SocialLink>
            </SocialLinks>
          </AboutMeImage>
          <AboutMeDetail>
            <Header>
              <Hello>
                Hello !
              </Hello>
              <HeaderTitle>
                I am Aida Jasmine
              </HeaderTitle>
            </Header>
            <DetailContent>
              <DetailColumn>
                <p>Dei Class aptent taciti sociosqu ad litora torquent per conubia nostra, per us incepto him enaim os. Mauris in erat justo. Nullam ac urna eu felis dapibusm condime ntume it et ame augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus tristique augue, rhoncus aliquam ipsum. Donec id dolor a neque. </p>
              </DetailColumn>
              <DetailColumn>
                <p>
                  Dei Class aptent taciti sociosqu ad litora torquent per conubia nostra, per us incenm tos him enaim os. Mauris in erat justo. Nullam ac urna eu felis dapdi busm condimen litora torquent per.
                </p>
              </DetailColumn>
            </DetailContent>
          </AboutMeDetail>
        </AboutMeWrapper>
      </Container>
    </Wrapper>
  );
};

export default AboutMe;
