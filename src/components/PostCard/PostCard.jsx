import { Link } from 'react-router-dom';
import React from 'react';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate, CardTime, CardBottomSpace,
} from './PostCard.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';
import { AidaImage } from '../Wrapper/AidaImage';
import { scrollToTop } from '../../util/scrollToTop';
import { parseDate } from '../../util/parseDate';

const PostCard = ({ post, col, readTime }) => {
  const {
    title, image, minuteToRead, category, uploadedDate, slug,
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
          <CardDate>{parseDate(uploadedDate)}</CardDate>
          <div>
            <Link
              onClick={scrollToTop}
              to={`/post/${slug}`}
            >
              <CardTitle readTime={readTime}>{title}</CardTitle>
            </Link>
          </div>
          {readTime && (
            <>
              <CardTime>{minuteToRead} mins to read</CardTime>
              <CardBottomSpace />
            </>
          )}
        </CardContent>
      </CardWrapper>

    </>
  );
};

export default PostCard;
