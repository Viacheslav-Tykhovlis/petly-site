import styled from 'styled-components';

export const NavButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  padding: 11px 5px 10px 5px;
  background-color: transparent;
  border-width: 0;
  cursor: pointer;

  &:hover span,
  &:focus span {
    background-color: orange;
  }
`;

export const NavButtonStripe = styled('span')`
  display: block;
  width: 100%;
  height: 3px;
  background-color: black;
  border-radius: 4px;
`;
