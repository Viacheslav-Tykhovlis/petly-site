import { List } from './NewsList.styled';

import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <List>
      {news
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map(({ title, url, description, date }) => (
          <NewsItem
            key={title}
            title={title}
            url={url}
            description={description}
            date={date}
          />
        ))}
    </List>
  );
};

export default NewsList;
