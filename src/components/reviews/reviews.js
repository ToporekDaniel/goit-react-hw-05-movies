//tutaj ma się stworzyć strona filmu znalezionego po id

import { axiosConfig } from 'components/axios/axiosconfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setRewiews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosConfig.get(
          `/movie/${movieId}/reviews?page=1`
        );
        setRewiews(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchReviews();
  }, [movieId]);
  console.log(reviews);

  const createList = () => {
    return reviews.map(review => (
      <li key={review.id}>
        <h4>{review.author}</h4>
        <p>{review.content}</p>
      </li>
    ));
  };

  return <ul>{createList()}</ul>;
};
