import { useState } from 'react';

import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { Modal } from 'components/Modal/Modal';
import ModalNotice from '../NoticeModal/ModalNotice';
// import Loader from 'components/Loader/Loader';

import { fetchNoticeById } from 'services/getNoticesById';
import { noticeLabelTranform } from 'utils/noticeLabelTranform';

import {
  StyledItem,
  Lable,
  StyledTitle,
  StyledList,
  FeaturesBox,
  Features,
  Text,
  ButtonBox,
} from './NoticeCategoryItem.styled';

import { StyledDeleteButton } from 'components/ReusableComponents/Buttons/StyledDeleteButton';

import defaultImg from '../../../img/defaultImg.jpg';

const NoticeCategoryItem = ({ notice, onClose }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
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
    // image
  } = notice;

  const onLearMoreButtonClick = () => {
    setShowDetailsModal(!showDetailsModal);
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
        <Lable>
          <p>{noticeLabelTranform(category)}</p>
        </Lable>

        <img src={defaultImg} alt="title" />
        <StyledLikeButton onButtonClick={onAddToFavorite} />
        <StyledTitle>{title}</StyledTitle>
        <StyledList>
          <FeaturesBox>
            <Features>
              <Text>Breed:</Text>
              <Text>Place:</Text>
              <Text>Age:</Text>
              {category === 'sell' && <Text>Price:</Text>}
            </Features>
            <Features>
              <Text>{breed || '-'}</Text>
              <Text>{location || '-'}</Text>
              <Text>{birthdate || '-'}</Text>
              {category === 'sell' && <Text>{`${price || '-'}$`}</Text>}
            </Features>
          </FeaturesBox>
        </StyledList>

        <ButtonBox>
          <StyledLearnMoreButton
            onButtonClick={onLearMoreButtonClick}
            buttonName="Learn more"
          />
          {true && (
            <StyledDeleteButton
              onButtonClick={onDeleteFromFavorite}
              buttonName="Delete"
            />
          )}
        </ButtonBox>
      </StyledItem>

      {!loading && noticeDetails && showDetailsModal && (
        <Modal onClose={onLearMoreButtonClick}>
          <ModalNotice
            noticeDetails={noticeDetails}
            onClose={onLearMoreButtonClick}
            onAddToFavorite={onAddToFavorite}
            loading={loading}
          />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
