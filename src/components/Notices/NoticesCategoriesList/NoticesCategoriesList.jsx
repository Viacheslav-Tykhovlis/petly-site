import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NoticesListSell from './NoticesListSell';
import NoticesListLostFound from './NoticesListLostFound';
import NoticesListGoodHands from './NoticesListGoodHands';
import NoticesListFavorite from './NoticesListFavorite';
import NoticesListMyAds from './NoticesListMyAds';
import Loader from 'components/Loader/Loader';

import { fetchNoticeByCategory } from 'services/getNoticesData';

const NoticesCategoriesList = () => {
  let { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [noticesList, setNoticesList] = useState([]);

  useEffect(() => {
    async function searchNoticeByCategory() {
      try {
        setLoading(true);

        const data = await fetchNoticeByCategory();
        setNoticesList(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    searchNoticeByCategory();
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && pathname === '/notices/sell' && (
        <NoticesListSell notices={noticesList} />
      )}

      {!loading && pathname === '/notices/lost-found' && (
        <NoticesListLostFound />
      )}

      {!loading && pathname === '/notices/for-free' && <NoticesListGoodHands />}

      {!loading && pathname === '/notices/favorite' && <NoticesListFavorite />}

      {!loading && pathname === '/notices/own' && <NoticesListMyAds />}
    </>
  );
};

export default NoticesCategoriesList;
