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

  return (
    <div>
      <h2>{details.title || details.name}</h2>
      <p>{details.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};
