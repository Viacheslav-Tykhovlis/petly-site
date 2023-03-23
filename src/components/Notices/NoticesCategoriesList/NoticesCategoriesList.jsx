import styled from '@emotion/styled';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NoticesCategoriesList = ({ notices, onClose }) => {
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
