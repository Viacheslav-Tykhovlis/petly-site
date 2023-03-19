import Container from '../Container/Container';
import Logo from './Logo/Logo';
import Nav from 'components/Header/Nav/Nav';
import AuthNav from 'components/Header/AuthNav/AuthNav';
import UserNav from 'components/Header/UserNav/UserNav';
import { MobileMenuButton } from './MobileMenuButton/MobileMenuButton';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ul>
        <li>
          <Nav />
        </li>
        <li>
          <UserNav />
        </li>
        <li>
          <AuthNav />
        </li>
      </ul>
      <MobileMenuButton />
    </Container>
  );
};

export default Header;
