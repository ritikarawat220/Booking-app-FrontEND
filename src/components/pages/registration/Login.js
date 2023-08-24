import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAsync } from '../../../store/authentication/login';

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.login);

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(loginAsync(credentials)).then((result) => {
      if (result && result.error) return;
      navigate('/');
    });
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login">
      <div className="login_sub">
        <h2 className="head2">Login</h2>
        {loading && <p>Loading...</p>}
        {error && (
        <p>
          Error:
          {error}
        </p>
        )}
        {token ? (
          <p>You are logged in!</p>
        ) : (
          <div>
            <input
              className="login_input"
              type="text"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <br />
            <br />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <br />
            <br />
            <button className="loginbtn" type="button" onClick={handleLogin}>Login</button>
            <button className="loginbtn1" type="button" onClick={handleSignup}>Sign Up</button>

          </div>
        )}
      </div>

    </div>
  );
};

export default Login;
