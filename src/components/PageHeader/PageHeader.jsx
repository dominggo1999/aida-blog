import { Link } from 'react-router-dom';
import React from 'react';
import Container from '../Wrapper/Container';
import {
  HeaderWrapper, HeaderTitle, NumberOfArticles, HeaderDescription, PageLink,
} from './PageHeader.style';
import { capitalize } from '../../util/capitalize';
import { scrollToTop } from '../../util/scrollToTop';

const PageHeader = ({ blog, title, num }) => {
  return (
    <HeaderWrapper>
      <Container>
        <span>
          <HeaderTitle>
            {capitalize(title)}
            {
              blog
              && (
              <NumberOfArticles>
                {num} articles
              </NumberOfArticles>
              )
            }
          </HeaderTitle>
        </span>
        <HeaderDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
          Asperiores non dolor officiis eaque corporis.
        </HeaderDescription>
        <PageLink>
          <Link
            onClick={scrollToTop}
            to="/"
          >
            Home
          </Link>
          &nbsp;&gt;&nbsp;
          {capitalize(title)}
        </PageLink>
      </Container>
    </HeaderWrapper>
  );
};

export default PageHeader;
