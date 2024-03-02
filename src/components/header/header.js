import { NavLink } from 'react-router-dom';

//stały header na stronie

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Movies">Movies</NavLink>
      </nav>
    </header>
  );
};
