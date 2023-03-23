import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import styled from '@emotion/styled';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 320px) {
    /* width: 280px; */
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    /* width: 608px; */
  }
`;

const NoticesCategoriesList = ({ notices }) => {
  return (
    <StyledList>
      {notices.map(notice => (
        <NoticeCategoryItem
          key={notice._id}
          notice={notice}
        ></NoticeCategoryItem>
      ))}
    </StyledList>
  );
};

export default NoticesCategoriesList;
