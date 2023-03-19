import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <ul>
        <NavLink to="/news">
          <p>News</p>
        </NavLink>
        <NavLink to="/notices">
          <p>Find pet</p>
        </NavLink>
        <NavLink to="/friends">
          <p>Our friends</p>
        </NavLink>
      </ul>
    </>
  );
};

export default Nav;
