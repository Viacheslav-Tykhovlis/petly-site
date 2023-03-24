import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsList from 'components/NewsList/NewsList';

import { fetchNews } from 'redux/news/newsOperations';
import LoaderNews from 'components/NewsList/LoaderNews';

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
  const ref = useRef();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // const updateQueryString = e => {
  //   // console.log('update', e.target.value);
  //   setSearchParams({ query: e.target.value });
  // };
  const visibleNews =
    news.length &&
    news.filter(item =>
      item.title.toLowerCase().includes(newsTitle.toLowerCase()),
    );

  // console.log(visibleNews);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const normilizedValue = form.elements.filter.value;

    if (normilizedValue.trim() === '') {
      return alert('Please, enter title name.');
    }
    setSearchParams({ query: normilizedValue });
  };

  const onClearField = e => {
    e.preventDefault();
    setSearchParams({ query: '' });
    ref.current.value = '';
  };

  return (
    <NewsSection>
      <Title>News</Title>

      <StyledForm onSubmit={handleSubmit}>
        <FilterLabel>
          <FilterInput
            // value={newsTitle}
            type="text"
            name="filter"
            placeholder="Search"
            ref={ref}
            // onChange={updateQueryString}
          />

          {!newsTitle ? (
            <SearchBtn type="submit">
              <AiOutlineSearch size={23} />
            </SearchBtn>
          ) : (
            <DeleteBtn type="button" onClick={onClearField}>
              <TiDeleteOutline size={23} />
            </DeleteBtn>
          )}
        </FilterLabel>
      </StyledForm>

      {visibleNews && !isLoading ? (
        <NewsList news={visibleNews} />
      ) : (
        <LoaderNews />
      )}

      {visibleNews.length === 0 && !isLoading && (
        <ErrorText>
          Sorry, there is no news at this moment.
          <br /> Try again later.
        </ErrorText>
      )}
    </NewsSection>
  );
};

export default NewsPage;
