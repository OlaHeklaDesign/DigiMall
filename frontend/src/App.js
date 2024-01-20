import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
