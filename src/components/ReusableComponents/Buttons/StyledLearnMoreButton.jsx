import styled from 'styled-components';
import { StyledNavLink } from './StyledNavButton';

const StyledNavModalLink = styled(StyledNavLink)`
  height: 38px;
  width: 100%;
  padding: 0;

  color: #f59256;
  font-size: 16px;
  line-height: 1.38;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    min-width: 248px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }

  &:active {
    color: #ff6101;
    background-color: #fff;
    border-color: #ff6101;
  }

  &:focus,
  &:hover {
    color: #ff6101;
    background-color: #fff;
    border-color: #ff6101;
  }
`;

export const StyledLearnMoreButton = ({ route, buttonName }) => {
  return <StyledNavModalLink to={route}>{buttonName}</StyledNavModalLink>;
};
