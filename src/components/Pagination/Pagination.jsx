import { useHistory } from 'react-router-dom';
import short from 'short-uuid';
import { PaginationContainer, NavBtn } from './Pagination.style';
import Button from '../Button/Button';
import { scrollToTop } from '../../util/scrollToTop';
import { categoryColors } from '../../data/categoryColors';

const Pagination = ({ params, total }) => {
  const { pageNumber } = params;
  const history = useHistory();
  let baseUrl = history.location.pathname.split('/');
  if(pageNumber) {
    baseUrl.pop();
  }
  baseUrl = `${baseUrl.join('/')}/`;

  // Total Blog Page
  // 5 is number of blogs per pages
  const lastPage = Math.ceil(total / 5);
  const pageButtons = new Array(lastPage).fill(0);

  // Validate Page Number
  const page = parseInt(pageNumber, 10);
  const pageNumberValid = (page) => {
    return page > 1 && typeof page === 'number';
  };

  const nextPage = () => {
    scrollToTop();
    if(!pageNumberValid(page)) {
      history.push(`${baseUrl}2`);
    }else{
      history.push(baseUrl + (page + 1));
    }
  };

  const prevPage = () => {
    scrollToTop();
    if(page === 2) {
      baseUrl = baseUrl.split('');
      baseUrl.pop();
      baseUrl = baseUrl.join('');
      history.push(baseUrl);
    }else{
      history.push(baseUrl + (page - 1));
    }
  };

  const visitPage = (targetPageNumber) => {
    scrollToTop();
    if(targetPageNumber === 1) {
      baseUrl = baseUrl.split('');
      baseUrl.pop();
      baseUrl = baseUrl.join('');
      console.log(baseUrl);
      history.push(baseUrl);
    } else {
      history.push(baseUrl + targetPageNumber);
    }
  };

  const pageButton = (id) => {
    let nav = false;

    if(id === page || (!pageNumberValid(page) && id === 1)) {
      nav = true;
    }

    return (
      <Button
        onClick={() => visitPage(id)}
        key={short.generate()}
        nav={nav}
        bg={categoryColors.brand1}
      >
        {id}
      </Button>
    );
  };

  return (
    <PaginationContainer>
      <NavBtn>
        {
          pageNumber
          && (
            <Button
              onClick={prevPage}
              bg={categoryColors.brand1}
            >Prev
            </Button>
          )
        }
      </NavBtn>

      {
        pageButtons.length >= 1 && pageButtons.map((_, id) => {
          return pageButton(id + 1);
        })
      }
      <NavBtn>
        {
          page !== lastPage
          && (
            <Button
              onClick={nextPage}
              bg={categoryColors.brand1}
            >Next
            </Button>
          )
        }
      </NavBtn>
    </PaginationContainer>
  );
};

export default Pagination;
