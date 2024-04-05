import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Register from "./pages/Register";
import { Cart } from "./pages/cart/cart";
import Login from "./pages/shop/Login";
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./components/Checkout";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
