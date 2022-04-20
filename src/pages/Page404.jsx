import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import {
  NotFoundWrapper, NotFound, NotFoundText, NotFoundDescription, NotFoundMessage,
} from '../styles/NotFound.style';
import Container from '../components/Wrapper/Container';
import Button from '../components/Button/Button';
import { scrollToTop } from '../util/scrollToTop';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Page404 = () => {
  const homeButton = useRef(null);

  useDocumentTitle('404');

  return (
    <NotFoundWrapper>
      <Container>
        <NotFound>
          <NotFoundText>
            404
          </NotFoundText>
          <NotFoundMessage>
            OOPS! PAGE NOT FOUND
          </NotFoundMessage>
          <NotFoundDescription>
            Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable
          </NotFoundDescription>
          <Link
            onClick={scrollToTop}
            to="/"
            ref={homeButton}
          >
            <Button nav>
              Homepage
            </Button>
          </Link>
        </NotFound>
      </Container>
    </NotFoundWrapper>
  );
};

export default Page404;
