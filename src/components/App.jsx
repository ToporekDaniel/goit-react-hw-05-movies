import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { MovieDetails } from './movies/movieid';
import { Cast } from './cast/cast';
import { Reviews } from './reviews/reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
