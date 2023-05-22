import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieLists from './components/MovieLists/MovieLists';
import MovieInfo from './components/MovieInfo/MovieInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MovieLists />} />
        <Route path="/movie/:index" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;

