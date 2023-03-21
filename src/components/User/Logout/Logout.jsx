import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from 'redux/user/userSlice';
import { HiOutlineLogout } from 'react-icons/hi';
import { IconStyle, Button, LogoutBtnText } from './Logout.styled';

const Logout = () => {
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  return (
    <Button
      type="button"
      // onClick={handleLogout}
      style={LogoutBtnText}
    >
      <HiOutlineLogout style={IconStyle} />
      Log Out
    </Button>
  );
};

export default Logout;
