import { useSelector } from 'react-redux';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { StyledList } from './NoticesCategoriesList.styled';

import { getNotices } from 'redux/notices/noticesSelectors';

const NoticesCategoriesList = ({ onClose }) => {
  const notices = useSelector(getNotices);

  return (
    <StyledList>
      {notices.map(notice => (
        <NoticeCategoryItem
          key={notice._id}
          notice={notice}
          onClose={onClose}
        ></NoticeCategoryItem>
      ))}
    </StyledList>
  );
};

export default NoticesCategoriesList;
