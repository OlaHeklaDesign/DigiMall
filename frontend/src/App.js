import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
