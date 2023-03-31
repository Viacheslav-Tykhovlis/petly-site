import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/login/logIn-operations';
import { BoxLogOut, LogoutSpan } from './Logout.styled';
import { ButtonLogout } from '../ButtonUser/ButtonUser';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <BoxLogOut type="button" ariaLabel="logout button" onClick={handleLogout}>
      <ButtonLogout strokeHover={'#f59256'} />
      <LogoutSpan>Log Out</LogoutSpan>
    </BoxLogOut>
  );
};

export default Logout;
