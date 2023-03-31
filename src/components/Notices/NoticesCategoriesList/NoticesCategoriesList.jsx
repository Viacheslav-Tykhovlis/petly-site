import { useSelector } from 'react-redux';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { StyledList } from './NoticesCategoriesList.styled';

import {
  getFavoriteNotices,
  getNotices,
  getOwnNotices,
} from 'redux/notices/noticesSelectors';
import CoverPage from 'components/ReusableComponents/CoverPage/CoverPage';

const NoticesCategoriesList = ({ category, onClose }) => {
  const notices = useSelector(getNotices);
  const ownNotices = useSelector(getOwnNotices);
  const favorites = useSelector(getFavoriteNotices);

  return (
    <>
      {category === 'sell' && (
        <StyledList>
          {notices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClose={onClose}
            ></NoticeCategoryItem>
          ))}
        </StyledList>
      )}

      {category === 'lost-found' && (
        <StyledList>
          {notices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClose={onClose}
            ></NoticeCategoryItem>
          ))}
        </StyledList>
      )}

      {category === 'for-free' && (
        <StyledList>
          {notices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClose={onClose}
            ></NoticeCategoryItem>
          ))}
        </StyledList>
      )}

      {category === 'own' && (
        <StyledList>
          {ownNotices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClose={onClose}
            ></NoticeCategoryItem>
          ))}
        </StyledList>
      )}
      {category === 'own' && !ownNotices.length && (
        <StyledList>
          <CoverPage />
        </StyledList>
      )}

      {category === 'favorite' && (
        <StyledList>
          {favorites.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClose={onClose}
            ></NoticeCategoryItem>
          ))}
        </StyledList>
      )}
      {category === 'favorite' && !favorites.length && (
        <StyledList>
          <CoverPage />
        </StyledList>
      )}
    </>
  );
};

export default NoticesCategoriesList;
