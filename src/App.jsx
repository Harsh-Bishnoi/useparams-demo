import './App.css';
import { Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Hard from './components/Hard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/category/soft" />} />
        <Route path="/category/:type" element={<Hard />} />
        <Route path="/alphabet/:alphabet_name" element={<Hard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
