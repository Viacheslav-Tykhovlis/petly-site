import styled from 'styled-components';
import { StyledNavLink } from './StyledNavButton';

const StyledNavModalLink = styled(StyledNavLink)`
  height: 40px;
  min-width: 176px;
  padding: 0;

  font-size: 20px;
`;

export const StyledNextButton = ({ route, buttonName }) => {
  return <StyledNavModalLink to={route}>{buttonName}</StyledNavModalLink>;
};
