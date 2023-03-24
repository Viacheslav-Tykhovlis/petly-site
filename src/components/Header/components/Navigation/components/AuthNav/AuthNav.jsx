import { StyledNavButton } from '../../../../../ReusableComponents/Buttons/StyledNavButton';
import { StyledLoginButton } from './AuthNav.styled';

export const AuthNav = ({ onClick }) => {
  return (
    <StyledLoginButton>
      <StyledNavButton route="/login" buttonName="Login" onClick={onClick} />
      <StyledNavButton
        route="/register"
        buttonName="Registration"
        onClick={onClick}
      />
    </StyledLoginButton>
  );
};
