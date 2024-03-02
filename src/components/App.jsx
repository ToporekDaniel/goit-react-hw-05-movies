import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { GetMoviesByName } from './movies/moviesearch';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="byname" element={<GetMoviesByName />} />
        </Route>
        <Route path="movies/:id" element={<Home />}>
          <Route path="cast" element={<GetMoviesByName />} />
          <Route path="revievs" element={<GetMoviesByName />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
