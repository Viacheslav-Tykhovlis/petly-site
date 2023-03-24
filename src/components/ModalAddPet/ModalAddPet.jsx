// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { CloseModalButton } from './ModalAddNotice.styled';
import { Modal } from 'components/Modal/Modal';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { ModalBox, TitleModal } from './ModalAddPet.styled';

const ModalAddPet = ({ noticeDetails, onClose }) => {
  const {
    // _id,
    name,
    birthdate,
    breed,
    comments,
    image,
  } = noticeDetails;

  useEffect(() => {
    document.body.classList.add('modal-open');
  }, []);

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
  };

  return (
    <Modal onClose={onClose}>
      <ModalBox>
        <CloseModalButton onClick={handleCloseModal} />
        <TitleModal>Add pet</TitleModal>

        <StepOne name={name} birthdate={birthdate} breed={breed} />
        <StepTwo comments={comments} image={image} />
      </ModalBox>
    </Modal>
  );
};

export default ModalAddPet;
