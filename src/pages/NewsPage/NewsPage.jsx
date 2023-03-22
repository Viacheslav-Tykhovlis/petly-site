import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsList from 'components/NewsList/NewsList';

import { fetchNews } from 'redux/news/newsOperations';

import {
  NewsSection,
  StyledForm,
  FilterLabel,
  FilterInput,
  SearchBtn,
  DeleteBtn,
  ErrorText,
} from './NewsPage.styled';
import Title from '../../components/Title/Title';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useSearchParams } from 'react-router-dom';

import { selectNews, selectIsLoading } from 'redux/news/newsSelectors';

const NewsPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNews);

  const newsTitle = searchParams.get('query') || '';

  const onClearField = e => {
    e.preventDefault();
    setSearchParams({ query: '' });
  };
  const updateQueryString = e => {
    // console.log('update', e.target.value);
    setSearchParams({ query: e.target.value });
  };
  const visibleNews =
    news.length &&
    news.filter(item =>
      item.title.toLowerCase().includes(newsTitle.toLowerCase()),
    );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // console.log(visibleNews);

  return (
    <NewsSection>
      <Title>News</Title>

      <StyledForm>
        <FilterLabel>
          <FilterInput
            value={newsTitle}
            type="text"
            name="filter"
            placeholder="Search"
            onChange={updateQueryString}
          />

          {!newsTitle ? (
            <SearchBtn
              type="button"
              onClick={() => {
                if (!newsTitle) {
                  alert('Search field cannot be empty');
                }
              }}
            >
              <AiOutlineSearch size={23} />
            </SearchBtn>
          ) : (
            <DeleteBtn type="submit" onClick={onClearField}>
              <TiDeleteOutline size={23} />
            </DeleteBtn>
          )}
        </FilterLabel>
      </StyledForm>

      {visibleNews && !isLoading && <NewsList news={visibleNews} />}

      {!visibleNews && !isLoading && (
        <ErrorText>
          Sorry, there is no news at this moment.
          <br /> Try again later.
        </ErrorText>
      )}
    </NewsSection>
  );
};

export default NewsPage;
