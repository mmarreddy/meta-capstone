import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';
import Header from './components/Header';
import { Confirmation } from './pages/Confirmation';
function App() {
  return (
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reservations" element={<Reservation/>}></Route>
        <Route path="/confirmation" element={<Confirmation/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
