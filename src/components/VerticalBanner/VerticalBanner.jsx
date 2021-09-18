import React from 'react';
import { BannerWrapper } from './VerticalBanner.style';
import { AidaImage } from '../Wrapper/AidaImage';

const BannerUrl = 'https://res.cloudinary.com/dv8aesvfs/image/upload/v1631894391/aida/Ad_Banner-min_h7vcq7.png';

const VerticalBanner = () => {
  return (
    <BannerWrapper>
      <a
        href="https://www.youtube.com/watch?v=3Ay4Sk7NRCY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AidaImage>
          <img
            src={BannerUrl}
            alt="Ads"
          />
        </AidaImage>
      </a>
    </BannerWrapper>
  );
};

export default VerticalBanner;
