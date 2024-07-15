import GetTrends from 'components/gettrends/gettrends';
import BigBox from 'components/bigbox/bigbox';

const Home = () => {
  return (
    <BigBox>
      <h2>Trending today</h2>

      <GetTrends></GetTrends>
    </BigBox>
  );
};

export default Home;
