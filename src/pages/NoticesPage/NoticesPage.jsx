import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Title from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import Loader from 'components/Loader/Loader';
import ModalAddNotice from 'components/Notices/NoticeModal/ModalAddNotice';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

import { StyledSection, ButtonBox } from './NoticesPage.styled';
import { StyledAddPetMobileButton } from 'components/ReusableComponents/Buttons/StyledAddPetMobileButton';
import { StyledAddPetDesktopButton } from 'components/ReusableComponents/Buttons/StyledAddPetDesktopButton';
import { Modal } from 'components/Modal/Modal';

import { selectIsLoggedIn } from 'redux/login/logIn-selectors';
import { getIsLoading } from 'redux/notices/noticesSelectors';
import {
  fetchFavoriteNotices,
  fetchNoticesByCategory,
  fetchNoticesByOwner,
} from 'redux/notices/noticesOperations';
import { showToastInfo } from 'utils/showTost';

const NoticesPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    // list of functions
    const searchNoticeByCategory = () => {
      try {
        dispatch(fetchNoticesByCategory(category));
      } catch (error) {
        console.log(error);
      }
    };

    const searchNoticesByOwner = () => {
      try {
        dispatch(fetchNoticesByOwner());
      } catch (error) {
        console.log(error);
      }
    };

    const searchFavoriteNotices = () => {
      try {
        dispatch(fetchFavoriteNotices());
      } catch (error) {
        console.log(error);
      }
    };

    // download data on different conditions
    searchNoticeByCategory();

    if (isLoggedIn) {
      searchNoticesByOwner();
    }

    if (isLoggedIn) {
      searchFavoriteNotices();
    }
  }, [category, isLoggedIn, dispatch]);

  const onAddButtonClick = () => {
    if (!isLoggedIn) {
      showToastInfo('Please, signup or login to add notice about your pet.');
      return;
    }
    setShowAddModal(!showAddModal);
  };

  return (
    <StyledSection>
      <Title>Find your favorite pet</Title>
      <NoticesSearch category={category} />

      <ButtonBox>
        <NoticesCategoriesNav category={category} />
        <StyledAddPetDesktopButton onAddButtonClick={onAddButtonClick} />
      </ButtonBox>

      <StyledAddPetMobileButton onAddButtonClick={onAddButtonClick} />

      {showAddModal && (
        <Modal onClose={onAddButtonClick}>
          <ModalAddNotice onClose={onAddButtonClick} />
        </Modal>
      )}

      <div style={{ position: 'relative' }}>
        {isLoading ? (
          <Loader />
        ) : (
          <NoticesCategoriesList
            category={category}
            onClose={onAddButtonClick}
          />
        )}
      </div>
    </StyledSection>
  );
};

export default NoticesPage;
