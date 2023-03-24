import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: #fdf7f2;

  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  z-index: 1000;
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  left: 0;
  gap: 60px;

  font-size: 48px;
`;

export const AuthButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 68px;
  gap: 12px;

  @media screen and (min-width: 767px) {
    display: none;
    margin-bottom: 0;
  }
`;

export const NavGeneralLink = styled(NavLink)`
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #111111;

  &:hover,
  &:focus,
  &.active {
    color: #f59256;
    &::after {
      position: absolute;
      bottom: 11px;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #f59256;
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  display: block;
`;
