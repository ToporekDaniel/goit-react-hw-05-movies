import { GetTrends } from 'gettrends/gettrends';

export const Home = () => {
  return (
    <>
      <h2>Trending today</h2>

      <GetTrends></GetTrends>
    </>
  );
};
