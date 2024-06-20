import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Header from './components/Header';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/reservations" element={<Reservation/>}></Route>
    </Routes>
  //   <div>
  //     <Header/>
  //   {/* <Home/> */}
  //   <Reservation/>
  // </div>
  );
}

export default App;
