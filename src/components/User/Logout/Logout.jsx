import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/login/logIn-operations';
import { BoxLogOut, LogoutSpan } from './Logout.styled';
import { ButtonLogout } from '../ButtonUser/ButtonUser';
// import { Navigate } from 'react-router';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    // return <Navigate to="/login" />;
  };
  return (
    <BoxLogOut type="button" ariaLabel="logout button">
      <ButtonLogout onClick={handleLogout} />
      <LogoutSpan>Log Out</LogoutSpan>
    </BoxLogOut>
  );
};

export default Logout;
