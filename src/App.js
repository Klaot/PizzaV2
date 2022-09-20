import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './scss/app.scss';
import Header  from './components/Header';
import Home from './pages/Home';
import CartEmpty from './pages/Cart-Empty';
import NotFound from './components/NotFound/404';
import Cart from './pages/Cart.jsx';

function App() {
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue}/>} />
              <Route path="/cart-empy" element={<CartEmpty/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </div>
    </div>
  );
};

export default App;
