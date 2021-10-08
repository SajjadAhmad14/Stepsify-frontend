import React, { useState } from 'react'
const axios = require('axios');

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
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
        localStorage.setItem('token', JSON.stringify({
          token: data.data.token
        }));

      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' id='name' placeholder='Username here' required onChange={handleName} /><br />
        <input type='password' name='password' id='password' placeholder='Password here' required onChange={handlePassword} /><br />
        <div className='btn-wrapper'>
          <input type='submit' name='submit' id='submit-btn' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default Login;