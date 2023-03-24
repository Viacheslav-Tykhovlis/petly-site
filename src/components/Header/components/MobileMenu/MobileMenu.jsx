import { Logo } from '../Logo/Logo';
import Container from 'components/Container/Container';
import { StyledNavButton } from '../../../ReusableComponents/Buttons/StyledNavButton';
import {
  NavContainer,
  NavList,
  NavGeneralLink,
  NavHeader,
  AuthButton,
  NavItem,
} from './MobileMenu.styled';

import { CloseModalButton } from '../MenuButton/MenuButtonClose.styled';

export const NavMobile = ({ onClose }) => {
  return (
    <NavContainer>
      <Container>
        <NavHeader>
          <Logo onClick={onClose} />
          <CloseModalButton onClick={onClose} />
        </NavHeader>
        <AuthButton>
          <StyledNavButton
            route="/login"
            buttonName="Login"
            onClick={onClose}
          />
          <StyledNavButton
            route="/register"
            buttonName="Registration"
            onClick={onClose}
          />
        </AuthButton>
        <NavList>
          <NavItem>
            <NavGeneralLink to="/news" onClick={onClose}>
              News
            </NavGeneralLink>
          </NavItem>
          <NavItem>
            <NavGeneralLink to="/notices/sell" onClick={onClose}>
              Find pet
            </NavGeneralLink>
          </NavItem>
          <NavItem>
            <NavGeneralLink to="/friends" onClick={onClose}>
              Our friends
            </NavGeneralLink>
          </NavItem>
        </NavList>
      </Container>
    </NavContainer>
  );
};
