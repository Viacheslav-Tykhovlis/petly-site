import styled from 'styled-components';
// import { RxHamburgerMenu } from 'react-icons/rx';

export const StyledMenuButton = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 4px;
    right: 37px;
    cursor: pointer;
    z-index: 100;

    &:hover,
    &:focus {
      color: orange;
    }
  }
`;
