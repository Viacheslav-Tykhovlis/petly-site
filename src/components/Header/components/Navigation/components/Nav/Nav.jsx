import { NavList, NavGeneralLink } from './Nav.styled';

export const Nav = () => {
  return (
    <NavList>
      <li>
        <NavGeneralLink to="/news">News</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/notices/sell">Find pet</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/friends">Our friends</NavGeneralLink>
      </li>
    </NavList>
  );
};
