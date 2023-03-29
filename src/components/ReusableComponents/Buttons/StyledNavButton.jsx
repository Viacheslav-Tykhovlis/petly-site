import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 35px;
  padding: 0 28px;

  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;

  color: #111111;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  outline: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    height: 44px;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    height: 47px;
  }

  &.active {
    color: #fff;
    background-color: #f59256;
  }

  &:focus,
  &:hover {
    color: #fff;
    background-color: #f59256;
  }
`;

export const StyledNavButton = ({ route, buttonName, onClick }) => {
  return (
    <StyledNavLink to={route} onClick={onClick}>
      {buttonName}
    </StyledNavLink>
  );
};
