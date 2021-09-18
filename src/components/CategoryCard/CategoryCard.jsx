import React from 'react';
import {
  CardWrapper, ImageWrapper, CardOverlay, CategoryText,
} from './CategoryCard.style';
import { AidaImage } from '../Wrapper/AidaImage';

const CategoryCard = ({ category }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <AidaImage>
          <img
            src={category.image}
            alt="Cool"
          />
        </AidaImage>
        <CategoryText>
          <p>
            {category.category}
          </p>
        </CategoryText>
        <CardOverlay />
      </ImageWrapper>
    </CardWrapper>
  );
};

export default CategoryCard;
