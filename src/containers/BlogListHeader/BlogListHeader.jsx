import { Link } from 'react-router-dom';
import React from 'react';
import Container from '../../components/Wrapper/Container';
import {
  BlogListHeaderWrapper, HeaderTitle, NumberOfArticles, HeaderDescription, PageLink,
} from './BlogListHeader.style';
import { capitalize } from '../../util/capitalize';
import { scrollToTop } from '../../util/scrollToTop';

const BlogTopSection = ({ title, num }) => {
  // Fetch blog list information here

  return (
    <BlogListHeaderWrapper>
      <Container>
        <span>
          <HeaderTitle>
            {title}
            <NumberOfArticles>
              {num} articles
            </NumberOfArticles>
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
          &nbsp;&gt;
          All articles
        </PageLink>
      </Container>
    </BlogListHeaderWrapper>
  );
};

export default BlogTopSection;
