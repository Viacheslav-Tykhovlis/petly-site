import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <ul>
      {notices.map(notice => (
        <NoticeCategoryItem
          key={notice._id}
          notice={notice}
        ></NoticeCategoryItem>
      ))}
    </ul>
  );
};

export default NoticesCategoriesList;
