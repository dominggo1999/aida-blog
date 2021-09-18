/* eslint-disable import/no-unresolved */

import React from 'react';
import Container from '../Wrapper/Container';
import {
  WelcomeWrapper, WelcomeHalf, WelcomeInner, WelcomeImageWrapper, WelcomeTitle, WelcomeContent, Signature, WelcomeButton,
} from './Welcome.style';
import { AidaImage } from '../Wrapper/AidaImage';

// Image source
const welcomeImageURL = 'https://res.cloudinary.com/dv8aesvfs/image/upload/v1631115067/aida/pexels-amina-filkins-5414320_rsfaoo.jpg';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Container>
        <WelcomeInner>
          <WelcomeHalf>
            <WelcomeImageWrapper>
              <AidaImage>
                <img
                  src={welcomeImageURL}
                  alt="Cool"
                />
              </AidaImage>
            </WelcomeImageWrapper>
          </WelcomeHalf>
          <WelcomeHalf>
            <WelcomeTitle>Welcome to my blog</WelcomeTitle>
            <WelcomeContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda doloribus et nemo necessitatibus! Animi enim cum repellendus quas, doloremque libero quam aut possimus nam cupiditate.
            </WelcomeContent>
            <WelcomeContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iure odit porro soluta fugiat commodi architecto accusamus repellat
            </WelcomeContent>
            <WelcomeButton nav>Subscribe</WelcomeButton>
            <Signature>Aida</Signature>
          </WelcomeHalf>
        </WelcomeInner>
      </Container>
    </WelcomeWrapper>
  );
};

export default Welcome;
