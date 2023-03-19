import styled from 'styled-components';
import { StyledNavLink } from './StyledNavButton';

const StyledNavModalLink = styled(StyledNavLink)`
  height: 44px;
  min-width: 180px;
  padding: 0;

  font-size: 20px;

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;

export const StyledNextButton = ({ route, buttonName }) => {
  return <StyledNavModalLink to={route}>{buttonName}</StyledNavModalLink>;
};
