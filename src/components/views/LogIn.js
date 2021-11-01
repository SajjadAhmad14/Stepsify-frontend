import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../store/actions/index'
import {
  Link,
} from 'react-router-dom';
const axios = require('axios');
const Login = () => {
  const dispatch = useDispatch()
  const notify = (error) => {
    toast.error(`${error}`, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login', {
      username: name,
      password: password
    })
      .then((data) => {
        dispatch(allActions.login(data.data.user))
        localStorage.setItem('token', JSON.stringify(
          data.data.token
        ));
        const user = {
          id: data.data.user.id,
          sex: data.data.user.sex,
          name: data.data.user.username
        }
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/')
        window.location.reload()
      })
      .catch(error => {
        if (error.response) {
          notify(error.response.data.message)
        }
      })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' id='name' placeholder='Username here' required onChange={handleName} /><br />
          <input type='password' name='password' id='password' placeholder='Password here' required onChange={handlePassword} /><br />
          <div className='btn-wrapper'>
            <input type='submit' name='submit' id='submit-btn' value='Log In' />
          </div>
          <div className='signup-route'>
            <div>OR</div>
            <div className='signup-btn'>
              <Link to='/SignUp'>
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;