import { Routes, Route } from 'react-router-dom';
import Animes from './components/Animes/Animes';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SingleAnime from './components/SingleAnime/SingleAnime';
import { FormContextProvider } from './context/FormContext';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Animes />} />
          <Route
            path="/login"
            element={
              <FormContextProvider>
                <Login />
              </FormContextProvider>
            }
          />
          <Route path="/anime/:id" element={<SingleAnime />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
