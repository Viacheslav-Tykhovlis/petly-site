import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsList from 'components/NewsList/NewsList';

import { fetchNews } from 'redux/news/newsOperations';
// import LoaderNews from 'components/NewsList/LoaderNews';
import Loader from 'components/Loader/Loader';

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

import { toast } from 'react-toastify';
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

  const visibleNews =
    news.length &&
    news.filter(item =>
      item.title.toLowerCase().includes(newsTitle.toLowerCase()),
    );

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const normilizedValue = form.elements.filter.value;

    if (normilizedValue.trim() === '') {
      return toast.error('Please, enter title name.', {
        position: 'top-center',
        theme: 'colored',
        autoClose: 1500,
        closeOnClick: true,
      });
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
            type="text"
            name="filter"
            placeholder="Search"
            ref={ref}
          />

          {!newsTitle ? (
            <SearchBtn type="submit">
              <svg width="18" height="18" viewBox="0 0 32 32">
                <path d="M22.222 19.556h-1.404l-0.498-0.48c1.742-2.027 2.791-4.658 2.791-7.52 0-6.382-5.173-11.556-11.556-11.556s-11.556 5.173-11.556 11.556c0 6.382 5.173 11.556 11.556 11.556 2.862 0 5.493-1.049 7.52-2.791l0.48 0.498v1.404l8.889 8.871 2.649-2.649-8.871-8.889zM11.556 19.556c-4.427 0-8-3.573-8-8s3.573-8 8-8c4.427 0 8 3.573 8 8s-3.573 8-8 8z"></path>
              </svg>
            </SearchBtn>
          ) : (
            <DeleteBtn type="button" onClick={onClearField}>
              <svg width="24" height="24" viewBox="0 0 32 32">
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.667"
                  d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zM20 12l-8 8M12 12l8 8"
                />
              </svg>
            </DeleteBtn>
          )}
        </FilterLabel>
      </StyledForm>

      {visibleNews && !isLoading ? <NewsList news={visibleNews} /> : <Loader />}

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
