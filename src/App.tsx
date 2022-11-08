import { Routes, Route } from 'react-router-dom';
import Animes from './components/Animes/Animes';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="bg-blue-300">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Animes />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
