import { StyledNavButton } from '../../../../../ReusableComponents/Buttons/StyledNavButton';
import { StyledLoginButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledLoginButton>
      <StyledNavButton route="/login" buttonName="Login" />
      <StyledNavButton route="/register" buttonName="Registration" />
    </StyledLoginButton>
  );
};
