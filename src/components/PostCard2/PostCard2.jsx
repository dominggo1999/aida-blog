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
import { parseDate } from '../../util/parseDate';

const PostCard2 = ({ post }) => {
  const {
    title, image, minuteToRead, category, uploadedDate, slug,
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
        <Link to={`/blog/category/${category.toLowerCase()}`}>
          <Button
            onClick={scrollToTop}
            bg={bg}
          >{capitalize(category)}
          </Button>
        </Link>
        <Link
          onClick={scrollToTop}
          to={`/post/${slug}`}
        >
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardDate>{parseDate(uploadedDate)}</CardDate>
        <CardTimeToRead>{minuteToRead} mins to read</CardTimeToRead>
      </CardContent>
    </CardWrapper>
  );
};

export default PostCard2;
