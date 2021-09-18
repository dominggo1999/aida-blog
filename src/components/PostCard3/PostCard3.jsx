import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate,
} from './PostCard3.style';
import { AidaImage } from '../Wrapper/AidaImage';
import { scrollToTop } from '../../util/scrollToTop';

const PostCard3 = ({ post }) => {
  const { title, image } = post;

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
            to="/blog"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDate>
          20 September 2021
        </CardDate>
      </CardContent>
    </CardWrapper>
  );
};

export default PostCard3;
