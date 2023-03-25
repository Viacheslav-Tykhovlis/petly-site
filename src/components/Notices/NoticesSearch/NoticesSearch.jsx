import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import { StyledSearchBox } from './NoticesSearch.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNoticesByCategory,
  fetchNoticesByTitle,
} from 'redux/notices/noticesOperations';

import {
  // getError,
  getSearchBtnIsActive,
} from 'redux/notices/noticesSelectors';

const NoticesSearch = ({ category }) => {
  const dispatch = useDispatch();
  const isButtonClicked = useSelector(getSearchBtnIsActive);
  // const isError = useSelector(getError);

  const searchNoticeByTitle = title => {
    if (!isButtonClicked) {
      try {
        dispatch(fetchNoticesByCategory(category));
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      dispatch(fetchNoticesByTitle(title));
    } catch (error) {
      console.log(error);
      alert('Sorry, no pets by this title');
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.search.value;

    if (normilizedValue.trim() === '') {
      return alert('Please, enter title name.');
    }

    searchNoticeByTitle(normilizedValue);

    if (!isButtonClicked) {
      form.reset();
    }
  };

  return (
    <StyledSearchBox>
      <SearchBar
        onFormSubmit={onFormSubmit}
        isButtonClicked={isButtonClicked}
      />
    </StyledSearchBox>
  );
};

export default NoticesSearch;