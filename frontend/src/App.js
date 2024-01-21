import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Product from './Pages/Product';
import Shop from './Pages/Shop/Shop';
import Search from './Pages/Search/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
