import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../../store/authentication/signup';

function Signup() {
  const dispatch = useDispatch();
  const {
    loading, error, user, token,
  } = useSelector((state) => state.signup);

  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleSignup = () => {
    dispatch(signupAsync(userData));
  };

  return (
    <div>
      <h2>Signup</h2>
      {loading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
      {user && token && (
      <p>
        Signup successful. Welcome,
        {user.username}
        !
      </p>
      )}
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <input
        type="button"
        placeholder="Login"
        onClick={handleSignup}
      />
    </div>
  );
}

export default Signup;
