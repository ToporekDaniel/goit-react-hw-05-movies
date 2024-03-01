import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/header';
import { Home } from './home/home';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
