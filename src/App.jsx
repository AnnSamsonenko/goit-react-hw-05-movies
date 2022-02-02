import { AppBar } from 'components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<h2>Movies List</h2>}></Route>
        <Route path="/movies*" element={<h2>Search</h2>}></Route>
      </Routes>
    </>
  );
};
