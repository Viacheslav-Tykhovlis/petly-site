import { LogoAccent, LogoWrapper } from './Logo.styled';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoWrapper>
        pe<LogoAccent>t</LogoAccent>ly
      </LogoWrapper>
    </NavLink>
  );
};
