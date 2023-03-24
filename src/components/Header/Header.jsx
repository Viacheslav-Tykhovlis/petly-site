import { Logo, Navigation } from './components';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </header>
  );
};

export default Header;
