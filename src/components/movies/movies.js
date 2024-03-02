import { useState } from 'react';
import { GetMoviesByName } from './moviesearch';

//formulaż do wyszukiwania filmów w api

export const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async e => {
    e.preventDefault();
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
