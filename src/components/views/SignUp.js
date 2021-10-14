import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
const axios = require('axios');

const SignUp = () => {
  const notify = (error) => {
    toast.error(`${error}`, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory();
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/users', {
      username: name,
      password: password
    })
      .then((data) => {
        history.push('/login');
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data.errors);
          notify(error.response.data.errors)
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
            <input type='submit' name='submit' id='submit-btn' value='Sign Up' />
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp;