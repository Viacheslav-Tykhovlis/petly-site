import { Outlet } from 'react-router-dom';
import { StyledNavButton } from '../../ReusableComponents/Buttons/StyledNavButton';

const AuthNav = () => {
  return (
    <>
      <StyledNavButton route="/login" buttonName="Login" />
      <StyledNavButton route="/register" buttonName="Registration" />
      <Outlet />
    </>
  );
};

export default AuthNav;
