import { Link } from 'react-router-dom';
import React from 'react';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate, CardTimeToRead,
} from './PostCard2.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';
import { AidaImage } from '../Wrapper/AidaImage';
import { scrollToTop } from '../../util/scrollToTop';

const PostCard2 = ({ post }) => {
  const {
    title, image, minuteToRead, category,
  } = post;
  const bg = categoryColors[category.toLowerCase()];

  return (
    <CardWrapper>
      <CardImage>
        <AidaImage>
          <img
            src={image}
            alt="Cool"
          />
        </AidaImage>
      </CardImage>
      <CardContent>
        <Button bg={bg}>{capitalize(category)}</Button>
        <Link
          onClick={scrollToTop}
          to="/blog"
        >
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardDate>September 11, 2021</CardDate>
        <CardTimeToRead>{minuteToRead} mins to read</CardTimeToRead>
      </CardContent>
    </CardWrapper>
  );
};

export default PostCard2;
