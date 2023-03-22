import { NavList, NavGeneralLink } from './Nav.styled';

export const Nav = () => {
  return (
    <NavList>
      <li>
        <NavGeneralLink to="/news">
          <p>News</p>
        </NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/notices/sell">
          <p>Find pet</p>
        </NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/friends">
          <p>Our friends</p>
        </NavGeneralLink>
      </li>
    </NavList>
  );
};
