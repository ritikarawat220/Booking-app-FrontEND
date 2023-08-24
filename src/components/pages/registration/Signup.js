import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../../store/authentication/signup';

function Signup() {
  const dispatch = useDispatch();
  const {
    loading, error, user, token,
  } = useSelector((state) => state.signup);

  const [userData, setUserData] = useState({
    name: '', email: '', password: '', password_confirmation: '',
  });

  const handleSignup = () => {
    dispatch(signupAsync(userData));
    window.location.href = '/login';
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
        {user.name}
        !
      </p>
      )}
      <input
        type="text"
        placeholder="Username"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
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
        type="password"
        placeholder="Password Confirmation"
        value={userData.password_confirmation}
        onChange={(e) => setUserData({ ...userData, password_confirmation: e.target.value })}
      />
      <button type="button" onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
