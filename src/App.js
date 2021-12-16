import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Schedules from './pages/Schedules';

function App() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedules/:from/:to/:date/:direct/:page" element={<Schedules />} />
      </Routes>
    </div>
  );
}

export default App;
