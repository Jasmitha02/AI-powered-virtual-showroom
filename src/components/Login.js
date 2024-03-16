import React, { useState } from 'react';
import Axios from 'axios';
import Hasher from './hasher';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const redirectToHome = () => {
    window.location.href = '/';
  };
  const submit = (event) => {
    event.preventDefault();
    Axios.get('https://backendss-uvix.onrender.com/loginRoute/get-password/' + email)
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          if (!data) {
            alert('Email is not registered');
            return;
          }

          Hasher(pass)
            .then((hashedPassword) => {
              if (hashedPassword === data.password) {
              
                localStorage.setItem('id', data._id);
                localStorage.setItem('email',data.email);
                localStorage.setItem('islogged', true);

                redirectToHome();
              } else {
                console.log('Login Failed (incorrect password or email)');
                alert('Login Failed (incorrect password or email)');
              }
            })
            .catch((error) => {
              console.error('Error hashing password:', error);
            });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };


  return (
    <div className='container' style={{ maxWidth: '50%',
  }}>
      <form>
        <center className='row '>
          <form>
            <input
              type='text'
              id='email'
              onChange={(event) => setEmail(event.target.value)}
              className='form-control mb-3 col-8'
              placeholder='Enter your email'
            />
            <input
              type='password'
              id='password'
              onChange={(event) => setPass(event.target.value)}
              className='form-control mb-3 col-8'
              placeholder='Enter your password'
            />
            <button
              className='btn btn-mute d-flex justify-content-center my-2'
              style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}
              onClick={submit}
            >
              Login
            </button>
          </form>
          <p style={{ color:"white"}}>
            Don't have an account?{' '}
            <Link to='/signin' style={{ color: "#ffac3c"}} >Sign up here</Link>
          </p>
        </center>
      </form>
    </div>
  );
}

export default Login;