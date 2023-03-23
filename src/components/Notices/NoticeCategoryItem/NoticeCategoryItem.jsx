import { useState } from 'react';

import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { Modal } from 'components/Modal/Modal';
import ModalNotice from '../NoticeModal/ModalNotice';
import Loader from 'components/Loader/Loader';

import { fetchNoticeById } from 'services/getNoticesById';
import { noticeLabelTranform } from 'utils/noticeLabelTranform';
import defaultImg from '../../../images/defaultImg.jpg';

import styled from '@emotion/styled';

const StyledItem = styled.li`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px; */

  background: #ffffff;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

const NoticeCategoryItem = ({ notice }) => {
  const [showDetailsModal, setSDetailsModal] = useState(false);
  const [noticeDetails, setNoticeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    _id,
    category,
    title,
    birthdate,
    breed,
    location,
    price,
    // image,
  } = notice;

  const onLearMoreButtonClick = () => {
    setSDetailsModal(!showDetailsModal);
    searchNoticeById(_id);
  };

  const searchNoticeById = async () => {
    try {
      setLoading(true);
      const { data } = await fetchNoticeById(_id);
      setNoticeDetails(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onAddToFavorite = () => {
    console.log('add to faforite');
  };

  const onDeleteFromFavorite = () => {
    console.log('delete from faforite');
  };

  return (
    <>
      <StyledItem>
        <p>{noticeLabelTranform(category)}</p>
        <StyledLikeButton onButtonClick={onAddToFavorite} />
        <img src={defaultImg} alt="title" />
        <h2>{title}</h2>
        <ul>
          <li>
            <p>Breed:</p>
            <p>{breed}</p>
          </li>
          <li>
            <p>Place</p>
            <p>{location}</p>
          </li>
          <li>
            <p>Age:</p>
            <p>{birthdate}</p>
          </li>
          {category === 'Sell' && (
            <li>
              <p>Price:</p>
              <p>{price || ''}</p>
            </li>
          )}
        </ul>

        <StyledLearnMoreButton
          onButtonClick={onLearMoreButtonClick}
          buttonName="Learn more"
        />
        <StyledLearnMoreButton
          onButtonClick={onDeleteFromFavorite}
          buttonName="Delete"
        />
      </StyledItem>

      {loading && <Loader />}

      {!loading && noticeDetails && showDetailsModal && (
        <Modal onClose={onLearMoreButtonClick}>
          <ModalNotice noticeDetails={noticeDetails} />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
