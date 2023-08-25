import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../../store/authentication/signup';

const Signup = () => {
  const dispatch = useDispatch();
  const {
    loading, error, user, token,
  } = useSelector((state) => state.signup);

  const [userData, setUserData] = useState({
    name: '', email: '', password: '', password_confirmation: '',
  });

  const [signupError, setSignupError] = useState(null); // State for signup error

  const handleSignup = () => {
    if (!userData.name || !userData.email || !userData.password || !userData.password_confirmation) {
      // Set an error message if any of the fields are empty
      setSignupError("Please fill in all fields.");
      return;
    }

    dispatch(signupAsync(userData));
    // Clear any previous signup errors
    setSignupError(null);
  };

  return (
    <div className="login">
      <div className="login_sub">
        <h2 className="head2">Signup</h2>
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
        {signupError && (
          <p style={{ color: 'red' }}>{signupError}</p> // Display signup error
        )}
        <input
          className="login_input"
          type="text"
          placeholder="Username"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <br />
        <br />
        <input
          className="login_input"
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <br />
        <br />
        <input
          className="login_input"
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <br />
        <br />
        <input
          className="login_input"
          type="password"
          placeholder="Password Confirmation"
          value={userData.password_confirmation}
          onChange={(e) => setUserData({ ...userData, password_confirmation: e.target.value })}
        />
        <br />
        <br />
        <button className="loginbtn" type="button" onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
