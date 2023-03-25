import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMobileContainer = styled.div`
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

  @media screen and (min-width: 767px) {
    margin-bottom: 88px;
    padding-top: 24px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  left: 0;
  gap: 40px;

  font-size: 32px;

  @media screen and (min-width: 767px) {
    font-size: 48px;
    gap: 60px;
  }
`;

export const AuthButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
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
      bottom: 7px;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #f59256;
    }
  }

  @media screen and (min-width: 767px) {
    &:hover,
    &:focus,
    &.active {
      color: #f59256;
      &::after {
        bottom: 11px;
      }
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  display: block;
`;
