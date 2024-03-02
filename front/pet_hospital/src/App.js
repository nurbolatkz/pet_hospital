import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <PrivateRoute path="/rooms" loggedIn={loggedIn}>
            <RoomsPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, loggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return <h2>Home</h2>;
}

function LoginPage({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you could implement actual authentication logic
    // For simplicity, we're just checking if both fields are filled
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function SignUpPage() {
  return <h2>Sign Up Page</h2>;
}

function RoomsPage() {
  return <h2>Rooms Page</h2>;
}

export default App;
