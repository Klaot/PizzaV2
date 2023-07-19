import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import CartEmpty from "./pages/Cart-Empty";
import NotFound from "./components/NotFound/404";
import PizzaInfo from "./components/PizzaInfo/PizzaInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart-empy" element={<CartEmpty />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizzas/:id" element={<PizzaInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
