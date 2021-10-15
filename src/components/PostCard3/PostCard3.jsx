import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate,
} from './PostCard3.style';
import { AidaImage } from '../Wrapper/AidaImage';
import { scrollToTop } from '../../util/scrollToTop';
import { parseDate } from '../../util/parseDate';

const PostCard3 = ({ post }) => {
  const {
    title, image, slug, uploadedDate,
  } = post;

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
        <CardTitle>
          <Link
            onClick={scrollToTop}
            to={`/post/${slug}`}
          >
            {title}
          </Link>
        </CardTitle>
        <CardDate>
          {parseDate(uploadedDate)}
        </CardDate>
      </CardContent>
    </CardWrapper>
  );
};

export default PostCard3;
