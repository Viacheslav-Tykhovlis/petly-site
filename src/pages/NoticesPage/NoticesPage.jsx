import { Outlet } from 'react-router-dom';
// import { useState } from 'react';

import Title from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';

import { StyledSection, ButtonBox } from './NoticesPage.styled';
import { StyledAddPetMobileButton } from 'components/ReusableComponents/Buttons/StyledAddPetMobileButton';
import { StyledAddPetDesktopButton } from 'components/ReusableComponents/Buttons/StyledAddPetDesktopButton';

const NoticesPage = () => {
  // const [pets, setPets] = useState([]);

  const onAddButtonClick = () => {
    console.log('add pet button click');
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

      {/* {modal window} here?? */}

      <Outlet />
    </StyledSection>
  );
};

export default NoticesPage;
