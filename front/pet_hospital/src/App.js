import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import SignupForm from './components/sign_upForm';
import './index.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Router >
        <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/sign_up" element={<SignupForm />} />
        </Routes>
  </Router>
    </div>
  )
}

export default App