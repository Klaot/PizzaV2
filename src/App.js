import { Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import './scss/app.scss';
import Header  from './components/Header';
import Home from './pages/Home';
import CartEmpty from './pages/Cart-Empty';
import NotFound from './components/NotFound/404';
import Cart from './pages/Cart.jsx';

export const SearchContext = createContext('')

function App() {

  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header/>
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home searchValue={searchValue} />} />
                <Route path="/cart-empy" element={<CartEmpty/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </div>
          </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
