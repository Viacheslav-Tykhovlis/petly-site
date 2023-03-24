import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from 'redux/user/userSlice';
import { BoxLogOut, LogoutSpan } from './Logout.styled';
import { ButtonLogout } from '../ButtonUser/ButtonUser';

const Logout = () => {
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  return (
    <BoxLogOut>
      <ButtonLogout
        type="button"
        ariaLabel="logout button"
        //   onClick={handleLogout}
      />
      <LogoutSpan>Log Out</LogoutSpan>
    </BoxLogOut>
  );
};

export default Logout;
