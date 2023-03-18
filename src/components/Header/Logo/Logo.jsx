import { LogoAccent, LogoName } from './Logo.styled';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/">
      <LogoName>
        pe<LogoAccent>t</LogoAccent>
        ly
      </LogoName>
    </NavLink>
  );
};

export default Logo;
