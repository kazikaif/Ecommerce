import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Sigin from "./Sigin";
import Kart from './Kart';
import Profile from './Profile'; // ✅ Import Profile component
import './App.css';

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Sigin />} />  
        <Route path="/kart" element={<Kart />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
    </Router>
  );
}

export default App;
