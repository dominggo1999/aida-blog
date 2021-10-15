import React from 'react';
import { Link } from 'react-router-dom';
import {
  EditorsPickedSlide, Half, ImageContainer, ContentTop, ContentDate, Time, ContentTitle, Description,
} from './Slide.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';
import { AidaImage } from '../Wrapper/AidaImage';
import { parseDate } from '../../util/parseDate';
import { scrollToTop } from '../../util/scrollToTop';

const Slide = ({ post }) => {
  const {
    title, category, description, minuteToRead, image, uploadedDate, slug,
  } = post;

  const bg = categoryColors[category.toLowerCase()];

  return (
    <EditorsPickedSlide>
      <Half>
        <ContentTop>
          <Link to={`/blog/category/${category.toLowerCase()}`}>
            <Button
              onClick={scrollToTop}
              bg={bg}
            >{capitalize(category)}
            </Button>
          </Link>
          <ContentDate>{parseDate(uploadedDate)}</ContentDate>
        </ContentTop>
        <ContentTitle>
          <Link
            onClick={scrollToTop}
            to={`/post/${slug}`}
          >
            {title}
          </Link>
        </ContentTitle>
        <Description>{description}</Description>
        <Time>- {minuteToRead} mins to read</Time>
      </Half>
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
    </EditorsPickedSlide>
  );
};

export default Slide;
