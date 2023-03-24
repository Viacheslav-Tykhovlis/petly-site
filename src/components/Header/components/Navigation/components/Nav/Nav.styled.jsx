import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled('ul')`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 1.38;
  gap: 80px;

  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    background-color: #fdf7f2;
    font-size: 48px;

    top: 0;
    right: 0;
    bottom: 0;
    left: -100%;

    width: 100%;
    height: 100vh;

    gap: 60px;
    z-index: 100;
    transition: left 1s;
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
      bottom: 4px;
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
