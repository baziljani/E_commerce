import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Login/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must be a valid @gmail.com address');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one letter, one number, and one special character.');
      return;
    }
    // Implement login logic here
    setUser({ email, name });
    navigate('/');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must be a valid @gmail.com address');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one letter, one number, and one special character.');
      return;
    }
    // Implement sign-up logic here
    setUser({ email, name });
    setIsSignUp(false);
    navigate('/');
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        {isSignUp && (
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long and include at least one letter, one number, and one special character."
            required
          />
        </div>
        <button type="submit" className="button">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleSignUp} className="toggle-button">
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Login;