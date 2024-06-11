import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/reservations" element={<Reservation/>}></Route>
    </Routes>
  );
}