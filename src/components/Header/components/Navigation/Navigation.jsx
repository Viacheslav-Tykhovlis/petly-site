import { MenuButtonOpen } from '../MenuButton/MenuButtonOpen.styled';
import { Nav, AuthNav, UserNav } from './components';
import { useState } from 'react';
import { NavMobile } from '../MobileMenu/MobileMenu';

export const Navigation = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const onAddButtonClick = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <>
      <Nav />
      <AuthNav />
      <UserNav />
      <MenuButtonOpen onAddButtonClick={onAddButtonClick} />
      {showAddModal && <NavMobile onClose={onAddButtonClick} />}
    </>
  );
};
