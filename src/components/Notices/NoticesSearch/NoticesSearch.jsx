import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import { StyledSearchBox } from './NoticesSearch.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNoticesByCategory,
  fetchNoticesByTitle,
} from 'redux/notices/noticesOperations';

import {
  getSearchBtnIsActive,
  getSearchTitleError,
} from 'redux/notices/noticesSelectors';
import { showToastInfo } from 'utils/showTost';
import { useEffect } from 'react';

const NoticesSearch = ({ category }) => {
  const dispatch = useDispatch();
  const isButtonClicked = useSelector(getSearchBtnIsActive);
  const isSearchError = useSelector(getSearchTitleError);

  useEffect(() => {
    if (isSearchError) {
      showToastInfo('Sorry, no pets by this title');
    }
  }, [isSearchError]);

  const searchNoticeByTitle = title => {
    if (!isButtonClicked) {
      try {
        dispatch(fetchNoticesByCategory(category));
      } catch (error) {
        console.log(error);
      }
      return;
    }

    if (category === 'own' || category === 'favorite') {
      showToastInfo('Sorry, you can’t search in this categories');
      return;
    }

    try {
      dispatch(fetchNoticesByTitle(title));
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.search.value;

    if (normilizedValue.trim() === '') {
      showToastInfo('Sorry, no pets by this title');
      return;
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
