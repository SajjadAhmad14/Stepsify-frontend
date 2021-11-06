import React, { useState } from 'react'
import { Redirect } from 'react-router'
import isLoggedIn from './isLoggedIn'
const axios = require('axios');

const ProgressPage = () => {
  const user = sessionStorage.getItem("user")
  const userInfo = JSON.parse(user)
  const id = parseInt(userInfo.id)
    axios.get('http://localhost:3000/api/v1/targets', {
      user_id: id
    })
    .then(data => {
      console.log(data)
    })
if (!isLoggedIn()) {
    return <Redirect to='/login' />
  }
  return (
    <div className="progress-page">
      <div className="progress-nav text-center">
        <div className="progress-heading">
          <h1>Progress report</h1>
        </div>
      </div>
    </div>
  )
};

export default ProgressPage;