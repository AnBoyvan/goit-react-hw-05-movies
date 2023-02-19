import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.menu}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
