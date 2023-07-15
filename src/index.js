import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import Grocery from './components/grocery';
import { Footer, Navbar } from './components';
import Electronics from './components/electronics';
import Mobiles from './components/mobile';
import Furniture from './components/furniture';
import Faqs from './pages/faqs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  
    <Provider store={store}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Grocery" element={<Grocery/>} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/faqs" element={<Faqs />} />
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </Provider>
    
  </BrowserRouter>
);