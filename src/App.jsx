
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/products/:category" element={<ProductList/>}>
        </Route>
        <Route path="/product/:id" element={<Product/>}>
        </Route>
        <Route path="/cart" element={<Cart/>}>
        </Route>
        <Route path="/success" element={<Success/>}>
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" element={<Home/>}/> : <Login/>}>
          
        </Route>
        <Route path="/register" element={user ? <Navigate to="/" element={<Home/>}/> : <Register/>}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;