import React from 'react';
import {
  BannerSlide, Half, ImageContainer, ContentTop, ContentDate, Time, ContentTitle, Description,
} from './Slide.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';
import { AidaImage } from '../Wrapper/AidaImage';
import { parseDate } from '../../util/parseDate';

const Slide = ({ post }) => {
  const {
    title, category, description, minuteToRead, image, uploadedDate,
  } = post;

  const bg = categoryColors[category.toLowerCase()];

  return (
    <BannerSlide>
      <Half>
        <ImageContainer>
          <AidaImage>
            <img
              src={image}
              alt="Cool"
            />
          </AidaImage>
        </ImageContainer>
      </Half>
      <Half>
        <ContentTop>
          <Button bg={bg}>{capitalize(category)}</Button>
          <ContentDate>{parseDate(uploadedDate)}</ContentDate>
        </ContentTop>
        <ContentTitle>
          {title}
        </ContentTitle>
        <Description>{description}</Description>
        <Time>- {minuteToRead} mins to read</Time>
      </Half>
    </BannerSlide>
  );
};

export default Slide;
