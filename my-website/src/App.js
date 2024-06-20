import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Header from './components/Header';
function App() {
  return (
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reservations" element={<Reservation/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
