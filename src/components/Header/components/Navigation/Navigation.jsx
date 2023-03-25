import { MenuButtonOpen } from '../MobileMenu/MenuButton/MenuButtonOpen.styled';
import { Nav, AuthNav, UserNav } from './components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/login/logIn-selectors';
import { NavMobile } from '../MobileMenu/MobileMenu';
import { NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const isloggedIn = useSelector(selectIsLoggedIn);

  const onAddButtonClick = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <NavContainer>
      <Nav />
      {isloggedIn ? <UserNav /> : <AuthNav />}
      <MenuButtonOpen onAddButtonClick={onAddButtonClick} />
      {showAddModal && <NavMobile onClose={onAddButtonClick} />}
    </NavContainer>
  );
};
