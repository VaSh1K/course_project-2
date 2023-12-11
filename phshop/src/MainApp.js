import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import ProductDetailPage from "./ProductdetailInfo";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Catalog from "./Catalog";

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/phones" element={<Catalog />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
