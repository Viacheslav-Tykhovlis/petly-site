import { useState } from 'react';
import { Nav, AuthNav, UserNav } from './components';
import { MenuButtonOpen } from '../MenuButton/MenuButtonOpen';
import { MenuButtonClose } from '../MenuButton/MenuButtonClose';

export const Navigation = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <Nav />
      <AuthNav />
      <UserNav />
      <div onClick={() => setNav(!nav)}>
        {nav ? <MenuButtonClose /> : <MenuButtonOpen />}
      </div>
    </>
  );
};
