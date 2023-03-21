import { useState } from 'react';

import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { Modal } from 'components/Modal/Modal';
import ModalNotice from '../NoticeModal/ModalNotice';

const NoticeCategoryItem = () => {
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

  return (
    <>
      <div style={{ width: '300px', backgroundColor: 'antiquewhite' }}>
        <p>Cute dog looking for a home</p>
        <p>Breed:</p>
        <p>Place</p>
        <p>Age:</p>
        <p>Price:</p>
        <StyledLikeButton onButtonClick={onAddToFavorite} />
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
