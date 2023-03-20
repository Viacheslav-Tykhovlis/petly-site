import { StyledNavButton } from '../../ReusableComponents/Buttons/StyledNavButton';

const AuthNav = () => {
  return (
    <>
      <StyledNavButton route="/login" buttonName="Login" />
      <StyledNavButton route="/register" buttonName="Registration" />
    </>
  );
};

export default AuthNav;
