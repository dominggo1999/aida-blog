import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import {
  HeaderTop, HeaderTitle, HeaderDate, HeaderReadingTime, Flex, HeaderImage,
} from './BlogHeader.style';
import Button from '../Button/Button';
import { categoryColors } from '../../data/categoryColors';
import { parseDate } from '../../util/parseDate';

const BlogHeader = ({ blog }) => {
  const {
    title, mainImage, category, readingTime,
  } = blog.fields;

  const publishedDate = blog.sys.createdAt;

  const cat = category.fields.category;
  const bg = categoryColors[cat.toLowerCase()];
  const imageURL = mainImage.fields.file.url;
  const { width, height } = (mainImage.fields.file.details.image);

  return (
    <>
      <HeaderTop>
        <Flex>
          <Button bg={bg}>{cat}</Button>
          <HeaderDate>{parseDate(publishedDate)}</HeaderDate>
        </Flex>
        <Flex>
          <HeaderReadingTime>
            <BiTimeFive />
            {readingTime} min read
          </HeaderReadingTime>
        </Flex>
      </HeaderTop>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      <HeaderImage>
        <img
          src={imageURL}
          alt="Main"
          width={width}
          height={height}
        />
      </HeaderImage>
    </>
  );
};

export default BlogHeader;
