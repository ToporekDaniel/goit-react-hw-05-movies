import { Link } from 'react-router-dom';

//tu mają się wyszukać filmy na czasie

export const GetTrends = () => {
  const createList = () => {
    const listItems = [];
    for (let i = 0; i < 11; i++) {
      listItems.push(
        <li key={i}>
          <Link to="#">ala ma kota</Link>
        </li>
      );
    }
    return listItems;
  };

  return <ul>{createList()}</ul>;
};
