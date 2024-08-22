import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewPage from './components/NewPage';
import Home from './components/Home';

function App() {
  return (
    <Routes path="/" element={<Home />}>
      <Route path="/:category?" element={<NewPage />} />;
    </Routes>
  );
}

export default App;
