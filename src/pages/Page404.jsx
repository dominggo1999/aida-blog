import { Link, useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  NotFoundWrapper, NotFound, NotFoundText, NotFoundDescription, NotFoundMessage,
} from '../styles/NotFound.style';
import Container from '../components/Wrapper/Container';
import Button from '../components/Button/Button';
import { scrollToTop } from '../util/scrollToTop';

const Page404 = () => {
  const history = useHistory();
  const homeButton = useRef(null);

  useEffect(() => {
    const redirectToHomepage = setTimeout(() => {
      homeButton.current.click();
    }, 3000);

    return () => {
      clearInterval(redirectToHomepage);
    };
  }, []);

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
