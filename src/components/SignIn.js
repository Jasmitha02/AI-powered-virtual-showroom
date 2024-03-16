import React, { useState } from 'react';
function SignIn() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const redirectToHome = () => {
    window.location.href = '/';
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const mockUser = {
      username: 'admin',
      password: '1234',
    };

    if (credentials.username === mockUser.username && credentials.password === mockUser.password) {
      alert('Login successful');
      localStorage.setItem('islogged', true);
      redirectToHome();
    } else {
      setMessage('Invalid username or password');
      document.getElementById('message').style.color = 'red';
    }
  };

  const styles = {
    container: {
      maxWidth: '50%',
    },
    heading: {
      color: '#ffac3c',
    },
    message: {
      my: '2',
      textAlign: 'center',
    },
    form: {
      control: {
        display: 'grid',
        margin: 'auto',
      },
    },
  };

  return (
    <div style={styles.container} className='d-grid mx-auto' >
      <h2 style={styles.heading} className='text-center mb-4'>
         Admin Login
      </h2>
      <p id='message' style={styles.message}>
        {message}
      </p>
      <form style={styles.form.control} onSubmit={handleSubmit}>
      <div className='d-flex m-2'>

        <label htmlFor='username' className='form-label mx-2'>
          Username:
        </label>
        <input
          type='text'
          id='username'
          name='username'
          value={credentials.username}
          onChange={handleChange}
          className='form-control '
          placeholder='Enter your Username'
        /></div>
        <div className='d-flex m-2'>
        <label htmlFor='password' className='form-label mx-2 '>
          Password:
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          className='form-control '
          placeholder='Enter your password'
        />
        </div>
        <button type='submit' className='btn btn-mute my-2 'style={{ backgroundColor: "#ffac3c",color: "#282c4c" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
