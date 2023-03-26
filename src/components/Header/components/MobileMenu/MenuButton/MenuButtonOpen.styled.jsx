import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';

export const StyledMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 1279px) {
    display: block;
    background-color: transparent;
    border: none;
    top: 4px;
    right: 37px;
    cursor: pointer;
    z-index: 100;

    &:hover,
    &:focus,
    &:active {
      color: orange;
    }
  }
`;

export const MenuButtonOpen = ({ onAddButtonClick }) => {
  return (
    <StyledMenuButton onClick={onAddButtonClick} type="button">
      <RxHamburgerMenu size={30} />
    </StyledMenuButton>
  );
};
