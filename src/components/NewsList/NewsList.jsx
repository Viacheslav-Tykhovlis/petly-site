import { useSearchParams } from 'react-router-dom';

import Title from 'components/Title/Title';

import {
  List,
  NewsSection,
  FilterLabel,
  FilterInput,
  SearchBtn,
  DeleteBtn,
} from './NewsList.styled';

import NewsItem from './NewsItem';

import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const NewsList = ({ news }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const newsTitle = searchParams.get('query') || '';

  const updateQueryString = e => {
    setSearchParams({ query: e.target.value });
  };
  const onClearField = e => {
    e.preventDefault();
    setSearchParams({ query: '' });
  };

  return (
    <NewsSection>
      <Title>News</Title>
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
            <AiOutlineSearch />
          </SearchBtn>
        ) : (
          <DeleteBtn type="submit" onClick={onClearField}>
            <TiDeleteOutline />
          </DeleteBtn>
        )}
      </FilterLabel>
      <List>
        {[...news]
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map(({ title, url, description, date }) => (
            <NewsItem
              title={title}
              url={url}
              description={description}
              date={date}
            />
          ))}
      </List>
    </NewsSection>
  );
};

export default NewsList;
