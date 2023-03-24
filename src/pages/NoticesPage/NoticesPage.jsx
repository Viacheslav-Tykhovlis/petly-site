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
import { fetchNoticeByTitle } from 'services/getNoticeByTitle';

// import { selectIsLoggedIn } from 'redux/login/logIn-selectors';
// import { useSelector } from 'react-redux';

const NoticesPage = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn);

  const { category } = useParams();
  const [showAddModal, setShowAddModal] = useState(false);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  useEffect(() => {
    if (category === 'favorite' || category === 'own') {
      return;
    }
    const searchNoticeByCategory = async () => {
      try {
        setLoading(true);
        const { data } = await fetchNoticesByCategory(category);
        setNotices(data);
        setIsButtonClicked(true);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    searchNoticeByCategory();
  }, [category]);

  const searchNoticeByTitle = async title => {
    setLoading(true);
    if (!isButtonClicked) {
      try {
        const { data } = await fetchNoticesByCategory(category);
        setIsButtonClicked(true);
        setNotices(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      return;
    }

    try {
      const { data } = await fetchNoticeByTitle(title);
      setNotices(data);
      setIsButtonClicked(false);
    } catch (error) {
      console.log(error);
      alert('Sorry, no pets by this title');
    }
    setLoading(false);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.search.value;

    if (normilizedValue.trim() === '') {
      return alert('Please, enter title name.');
    }

    searchNoticeByTitle(normilizedValue);
    if (!isButtonClicked) {
      form.reset();
    }
  };

  const onAddButtonClick = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <StyledSection>
      <Title>Find your favorite pet</Title>
      <NoticesSearch
        onFormSubmit={onFormSubmit}
        isButtonClicked={isButtonClicked}
      />

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
        {loading ? (
          <Loader />
        ) : (
          <NoticesCategoriesList notices={notices} onClose={onAddButtonClick} />
        )}
      </div>
    </StyledSection>
  );
};

export default NoticesPage;
