import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Title from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';

import { StyledSection, ButtonBox } from './NoticesPage.styled';
import { StyledAddPetMobileButton } from 'components/ReusableComponents/Buttons/StyledAddPetMobileButton';
import { StyledAddPetDesktopButton } from 'components/ReusableComponents/Buttons/StyledAddPetDesktopButton';
import { Modal } from 'components/Modal/Modal';
import ModalAddNotice from 'components/Notices/NoticeModal/ModalAddNotice';

const NoticesPage = () => {
  //  const [pets, setPets] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const onAddButtonClick = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <StyledSection>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />

      <ButtonBox>
        <NoticesCategoriesNav />
        <StyledAddPetDesktopButton onAddButtonClick={onAddButtonClick} />
      </ButtonBox>

      <StyledAddPetMobileButton onAddButtonClick={onAddButtonClick} />

      {showAddModal && (
        <Modal onClose={onAddButtonClick}>
          <ModalAddNotice />
        </Modal>
      )}

      <Outlet />
    </StyledSection>
  );
};

export default NoticesPage;
