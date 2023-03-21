import { useEffect, useState } from 'react';
import newsItem from '../../data/news.json';
import NewsList from 'components/NewsList/NewsList';

// import { useDispatch } from 'react-redux';

import {
  NewsSection,
  StyledForm,
  FilterLabel,
  FilterInput,
  SearchBtn,
  DeleteBtn,
} from './NewsPage.styled';
import Title from '../../components/Title/Title';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useSearchParams } from 'react-router-dom';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  // const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const newsTitle = searchParams.get('query') || '';

  useEffect(() => {
    setNews(newsItem);
  }, [news]);

  const onClearField = e => {
    e.preventDefault();
    setSearchParams({ query: '' });
  };
  const updateQueryString = e => {
    console.log('update', e.target.value);
    setSearchParams({ query: e.target.value });
  };
  const visibleNews =
    news.length &&
    news.filter(item =>
      item.title.toLowerCase().includes(newsTitle.toLowerCase()),
    );

  console.log(visibleNews);

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

      {visibleNews && <NewsList news={visibleNews} />}

      {/* {!visibleNews && (
        <h3>Sorry, there is no news at this moment. Try again later.</h3>
      )} */}
    </NewsSection>
  );
};

export default NewsPage;
