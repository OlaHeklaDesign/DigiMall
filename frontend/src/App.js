import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import LogIn from './Pages/LogIn/LogIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
