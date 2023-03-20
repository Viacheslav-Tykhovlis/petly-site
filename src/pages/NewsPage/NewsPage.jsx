import { useEffect, useState } from 'react';
import newsItem from '../../data/news.json';
import NewsList from 'components/NewsList/NewsList';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsItem);
  }, [news]);

  return <NewsList news={news} />;
};

export default NewsPage;
