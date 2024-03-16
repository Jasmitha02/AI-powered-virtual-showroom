import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    setPasswordMatchError('');

    try {
      const hashedPassword = await Hasher(password);

      const data = {
        email: email,
        password: hashedPassword,
      };

      const res = await Axios.post('https://backendss-uvix.onrender.com/loginRoute/register/', data);

      if (res.status === 200) {
        alert('Registration Successful');
        setTimeout(() => {
          window.location.href = '/#/home';
        }, 2000);
      } else {
        console.error('Unexpected status code:', res.status);
      }
    } catch (error) {
      setRegistrationError('Error during registration. Please try again.');
    } finally {
      event.target.reset();
    }
  };

  return (
    <div className="container" style={{ maxWidth: '50%' }}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="form-control"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning"
            style={{ backgroundColor: '#ffac3c', color: '#282c4c' }}
          >
            Register
          </button>
        </form>

        <div style={{ marginTop: '10px' }}></div>
        {passwordMatchError && <div style={{ color: 'red' }}>{passwordMatchError}</div>}
        {registrationError && <div style={{ color: 'red' }}>{registrationError}</div>}
      </div>
    </div>
  );
}

export default SignIn;