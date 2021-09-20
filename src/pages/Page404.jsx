import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {
  NotFoundWrapper, NotFound, NotFoundText, NotFoundDescription, NotFoundMessage,
} from '../styles/NotFound.style';
import Container from '../components/Wrapper/Container';
import Button from '../components/Button/Button';

const Page404 = () => {
  const history = useHistory();

  useEffect(() => {
    const redirectToHomepage = setInterval(() => {
      history.push('/');
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
          <Link to="/">
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
