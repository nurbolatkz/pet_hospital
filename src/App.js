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

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/sign_up" element={<SignupForm />} />
            <Route path="/services" element={<ProductPage />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
  </Router>
    </div>
  )
}

export default App