import { Link } from 'react-router-dom';
import React from 'react';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate, CardTime,
} from './PostCard.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';
import { AidaImage } from '../Wrapper/AidaImage';
import { scrollToTop } from '../../util/scrollToTop';

const PostCard = ({ post, col, readTime }) => {
  const {
    title, image, minuteToRead, category,
  } = post;
  const bg = categoryColors[category.toLowerCase()];

  return (
    <>
      <CardWrapper col={col}>
        <CardImage>
          <AidaImage>
            <img
              src={image}
              alt="Cool"
            />
          </AidaImage>
          <Button bg={bg}>{capitalize(category)}</Button>
        </CardImage>
        <CardContent>
          <CardDate>- September 10 2021</CardDate>
          <div>
            <Link
              onClick={scrollToTop}
              to="/"
            >
              <CardTitle readTime={readTime}>{title}</CardTitle>
            </Link>
          </div>
          {readTime && <CardTime>{minuteToRead} mins to read</CardTime>}
        </CardContent>
      </CardWrapper>

    </>
  );
};

export default PostCard;
