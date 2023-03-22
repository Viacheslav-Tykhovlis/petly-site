import { useState } from 'react';

import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { Modal } from 'components/Modal/Modal';
import ModalNotice from '../NoticeModal/ModalNotice';

import defaultImg from '../../../images/defaultImg.jpg';

const NoticeCategoryItem = ({ notice }) => {
  const [showDetailsModal, setSDetailsModal] = useState(false);

  const onLearMoreButtonClick = () => {
    setSDetailsModal(!showDetailsModal);
  };

  const onAddToFavorite = () => {
    console.log('add to faforite');
  };

  const onDeleteFromFavorite = () => {
    console.log('delete from faforite');
  };

  const {
    category,
    title,
    // name,
    birthdate,
    breed,
    // sex,
    location,
    // comments,
    price,
    // image,
    // favorite,
    // owner,
  } = notice;

  const noticeLabelTranfornm = category => {
    let categoryToDisplay = '';
    switch (category) {
      case 'sell':
        categoryToDisplay = 'Sell';
        break;
      case 'lost-found':
        categoryToDisplay = 'Lost/found';
        break;
      case 'for-free':
        categoryToDisplay = 'In good hands';
        break;
      default:
        categoryToDisplay = 'asdsSell';
    }
    return categoryToDisplay;
  };

  return (
    <>
      <div style={{ width: '300px', backgroundColor: 'antiquewhite' }}>
        <p>{noticeLabelTranfornm(category)}</p>
        <StyledLikeButton onButtonClick={onAddToFavorite} />
        <img src={defaultImg} alt="title" width="300px" />
        <h2>{title}</h2>
        <p>Breed:</p>
        <p>{breed}</p>
        <p>Place</p>
        <p>{location}</p>
        <p>Age:</p>
        <p>{birthdate}</p>
        <p>Price:</p>
        <p>{price}</p>

        <StyledLearnMoreButton
          onButtonClick={onLearMoreButtonClick}
          buttonName="Learn more"
        />
        <StyledLearnMoreButton
          onButtonClick={onDeleteFromFavorite}
          buttonName="Delete"
        />
      </div>

      {showDetailsModal && (
        <Modal onClose={onLearMoreButtonClick}>
          <ModalNotice />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
