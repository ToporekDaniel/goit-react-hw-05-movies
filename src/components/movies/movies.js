import { useState } from 'react';
import { GetMoviesByName } from './moviesearch';
import { useNavigate } from 'react-router-dom';

//formulaż do wyszukiwania filmów w api

export const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async e => {
    e.preventDefault();
    navigate(`/movies?query=${searchTerm}`);
  };

  return (
    <main>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <GetMoviesByName query={searchTerm} />
    </main>
  );
};
