import { Link, Outlet } from 'react-router-dom';

//formulaż do wyszukiwania filmów w api

export const Movies = () => {
  return (
    <main>
      <form>
        <input></input>
        <button>Search</button>
      </form>
      <Link to={'byname'}>byname</Link>
      <Outlet />
    </main>
  );
};
