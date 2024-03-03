//tutaj ma się stworzyć strona filmu znalezionego po id

import { axiosConfig } from 'components/axios/axiosconfig';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosConfig.get(`/movie/${movieId}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  console.log(details);
  return (
    <div>
      {details.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt="Movie Poster"
        />
      )}
      <h2>
        {details.title || details.name}{' '}
        {details.release_date && `(${details.release_date.split('-')[0]})`}
      </h2>

      <p>User score: {Math.round(details.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{details.overview}</p>
      <h3>Genres</h3>
      <p>
        {details.genres &&
          details.genres.map(genre => <span>{genre.name} </span>)}
      </p>
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
};
