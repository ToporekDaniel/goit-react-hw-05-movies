import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { GetMoviesByName } from './movies/moviesearch';
import { MovieDetails } from './movies/movieid';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<GetMoviesByName />} />
          <Route path="reviews" element={<GetMoviesByName />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
