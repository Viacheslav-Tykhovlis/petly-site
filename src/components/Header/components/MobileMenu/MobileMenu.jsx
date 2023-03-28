import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/login/logIn-selectors';
import Container from 'components/Container/Container';
import { StyledAccountButton } from 'components/ReusableComponents/Buttons/StyledAccountButton';
import { StyledNavButton } from '../../../ReusableComponents/Buttons/StyledNavButton';
import { CloseModalButton } from './MenuButton/MenuButtonClose.styled';
import { Logo } from '../Logo/Logo';
import {
  NavMobileContainer,
  NavList,
  NavGeneralLink,
  NavHeader,
  AuthButton,
} from './MobileMenu.styled';

export const NavMobile = ({ onClose }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavMobileContainer>
      <Container>
        <NavHeader>
          <Logo onClick={onClose} />
          <CloseModalButton onClick={onClose} />
        </NavHeader>
        <AuthButton>
          {isLoggedIn ? (
            <StyledAccountButton
              route="/user"
              buttonName="Account"
              onClick={onClose}
            />
          ) : (
            <>
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
            </>
          )}
        </AuthButton>
        <NavList>
          <li>
            <NavGeneralLink to="/news" onClick={onClose}>
              News
            </NavGeneralLink>
          </li>
          <li>
            <NavGeneralLink to="/notices/sell" onClick={onClose}>
              Find pet
            </NavGeneralLink>
          </li>
          <li>
            <NavGeneralLink to="/friends" onClick={onClose}>
              Our friends
            </NavGeneralLink>
          </li>
        </NavList>
      </Container>
    </NavMobileContainer>
  );
};
