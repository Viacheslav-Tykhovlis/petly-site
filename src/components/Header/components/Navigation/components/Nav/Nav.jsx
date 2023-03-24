import { NavList, NavGeneralLink, NavItem } from './Nav.styled';

export const Nav = () => {
  return (
    <NavList>
      <NavItem>
        <NavGeneralLink to="/news">News</NavGeneralLink>
      </NavItem>
      <NavItem>
        <NavGeneralLink to="/notices/sell">Find pet</NavGeneralLink>
      </NavItem>
      <NavItem>
        <NavGeneralLink to="/friends">Our friends</NavGeneralLink>
      </NavItem>
    </NavList>
  );
};
