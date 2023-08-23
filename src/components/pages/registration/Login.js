import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync } from '../../../store/authentication/login';

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.login);

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = () => {
    dispatch(loginAsync(credentials));
  };

  return (
    <div>
      <h2>Login</h2>
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
        <>
          <input
            type="text"
            placeholder="Username"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <input
            type="button"
            placeholder="Login"
            onClick={handleLogin}
          />
        </>
      )}
    </div>
  );
};

export default Login;
