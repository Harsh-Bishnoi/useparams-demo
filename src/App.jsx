// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hard from './components/Hard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/category/all" />} />
        <Route path="/category/:type" element={<Hard />} />
        <Route path="/alphabet/:alphabet_name" element={<Hard />} />
      </Routes>
    </Router>
  );
}

export default App;
