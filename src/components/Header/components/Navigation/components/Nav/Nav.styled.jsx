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
  }
`;

export const NavGeneralLink = styled(NavLink)`
  position: relative;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #111111;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &.active {
    color: #f59256;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: #f59256;
    transform: scaleX(0);
    transform-origin: left;
    transition: 250ms;
  }

  &:hover::after,
  &:focus::after,
  &.active::after {
    transform: scaleX(1);
  }
`;
