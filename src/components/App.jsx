import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header/header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
