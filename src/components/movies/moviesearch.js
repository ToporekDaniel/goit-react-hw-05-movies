import { Link } from 'react-router-dom';

//to ma zrobić listę filmów po wyszukaniu nazwy w api

export const GetMoviesByName = () => {
  const createList = () => {
    const listItems = [];
    for (let i = 0; i < 11; i++) {
      listItems.push(
        <li key={i}>
          <Link to="#">wysukiwanie z forma</Link>
        </li>
      );
    }
    return listItems;
  };

  return <ul>{createList()}</ul>;
};
