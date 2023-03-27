import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const CloseModalButton = ({ closeModal }) => {
  return (
    <ButtonCloseModal onClick={closeModal}>
      <AiOutlineClose size={24} />
    </ButtonCloseModal>
  );
};

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.backgroundFormInput};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  ${props => props.theme.mq.tablet} {
    width: 44px;
    height: 44px;
    top: 24px;
    right: 24px;
  }
`;
