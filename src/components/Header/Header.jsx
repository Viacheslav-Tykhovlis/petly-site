import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';

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
    </Container>
  );
};

export default Header;
