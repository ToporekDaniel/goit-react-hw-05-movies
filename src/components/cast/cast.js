//tutaj ma się stworzyć strona filmu znalezionego po id

import { axiosConfig } from 'components/axios/axiosconfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axiosConfig.get(`/movie/${movieId}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchCast();
  }, [movieId]);
  console.log(castInfo);

  const createList = () => {
    return castInfo.map(cast => (
      <li key={cast.cast_id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
          alt={`${cast.name}'s profile`}
        />
        <p>{cast.name}</p>

        <p>{cast.character}</p>
      </li>
    ));
  };

  return <ul>{createList()}</ul>;
};
