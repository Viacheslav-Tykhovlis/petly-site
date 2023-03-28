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
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MenuButtonOpen = ({ onMenuButtonClick }) => {
  return (
    <StyledMenuButton onClick={onMenuButtonClick} type="button">
      <RxHamburgerMenu size={30} />
    </StyledMenuButton>
  );
};
