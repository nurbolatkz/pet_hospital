import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import SignupForm from './components/sign_upForm';
import ProductPage from "./components/ProductPage";
import './index.css'
import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm';
import Checkout from './components/Checkout';

function App() {
  
const [loggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here (e.g., authentication with backend)
    // For simplicity, just set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, remove tokens)
    // For simplicity, just set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={handleLogin}/>} />
            <Route path="/sign_up" element={<SignupForm />} />
            <Route path="/services" element={<ProductPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
  </Router>
    </div>
  )
}

export default App