import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Schedules from './pages/Schedules';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedules/:from/:to/:date/:direct/:page" element={<Schedules />} />
      </Routes>
    </>
  );
}

export default App;
