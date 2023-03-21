import { format } from 'date-fns';

import {
  OneNews,
  NewsLine,
  NewsTitle,
  NewsDescr,
  NewsContainer,
  NewsDate,
  NewsLink,
} from './NewsList.styled';

const NewsItem = ({ title, url, description, date }) => {
  return (
    <OneNews>
      <NewsLine />
      <NewsTitle>{title}</NewsTitle>
      <NewsDescr>{description}</NewsDescr>
      <NewsContainer>
        <NewsDate>{format(new Date(date), 'MM/dd/yyyy')}</NewsDate>
        <NewsLink href={url} target="_blank">
          Read more
        </NewsLink>
      </NewsContainer>
    </OneNews>
  );
};

export default NewsItem;
