import Singin from './Singin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/singin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
