import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Title from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';

import { StyledSection, ButtonBox } from './NoticesPage.styled';
import { StyledAddPetMobileButton } from 'components/ReusableComponents/Buttons/StyledAddPetMobileButton';
import { StyledAddPetDesktopButton } from 'components/ReusableComponents/Buttons/StyledAddPetDesktopButton';
import { Modal } from 'components/Modal/Modal';
import ModalAddNotice from 'components/Notices/NoticeModal/ModalAddNotice';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { fetchNoticesByCategory } from 'services/getNoticeByCategory';
import Loader from 'components/Loader/Loader';

const NoticesPage = () => {
  const { category } = useParams();
  const [showAddModal, setShowAddModal] = useState(false);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category === 'favorite' || category === 'own') {
      return;
    }
    async function searchNoticeByCategory() {
      try {
        setLoading(true);
        const { data } = await fetchNoticesByCategory(category);
        setNotices(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    searchNoticeByCategory();
  }, [category]);

  const onAddButtonClick = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <StyledSection>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />

      <ButtonBox>
        <NoticesCategoriesNav category={category} />
        <StyledAddPetDesktopButton onAddButtonClick={onAddButtonClick} />
      </ButtonBox>

      <StyledAddPetMobileButton onAddButtonClick={onAddButtonClick} />

      {showAddModal && (
        <Modal onClose={onAddButtonClick}>
          <ModalAddNotice />
        </Modal>
      )}

      {loading ? <Loader /> : <NoticesCategoriesList notices={notices} />}
    </StyledSection>
  );
};

export default NoticesPage;
