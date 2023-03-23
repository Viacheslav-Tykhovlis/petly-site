import { Logo, Navigation } from './components';
import { HeaderContainer } from './Header.styled';
// import { MobileMenu } from './components/MobileMenu/MobileMenu';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
