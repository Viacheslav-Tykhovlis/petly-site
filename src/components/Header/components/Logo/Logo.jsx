import { LogoAccent, LogoWrapper } from './Logo.styled';
import { NavLink } from 'react-router-dom';

export const Logo = ({ onClick }) => {
  return (
    <NavLink to="/" onClick={onClick}>
      <LogoWrapper>
        pe<LogoAccent>t</LogoAccent>ly
      </LogoWrapper>
    </NavLink>
  );
};
