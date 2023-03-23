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
      {description ? (
        <NewsDescr>{description}</NewsDescr>
      ) : (
        <NewsDescr>
          Для ознайомлення з новиною натисніть <b>Read more</b>.
        </NewsDescr>
      )}

      <NewsContainer>
        <NewsDate>{format(new Date(date), 'dd/MM/yyyy')}</NewsDate>
        <NewsLink href={url} target="_blank">
          Read more
        </NewsLink>
      </NewsContainer>
    </OneNews>
  );
};

export default NewsItem;
