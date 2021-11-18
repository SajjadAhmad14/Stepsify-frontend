import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import addActivity from '../store/actions/activity'
import isLoggedIn from './isLoggedIn'

const StepsPage = () => {
  const history = useHistory()
  const [target, setTarget] = useState(0.0)
  const dispatch = useDispatch()
  if (!isLoggedIn()) {
    return <Redirect to='/login' />
  }
  const user = sessionStorage.getItem("user")
  const userInfo = JSON.parse(user)
  const id = parseInt(userInfo.id)
  const handleChange = (e) => {
    const target = parseFloat(e.target.value).toFixed(1)
    setTarget(target)
  }

  const handleReset = () => {
    document.getElementById('target-form').reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `https://stark-garden-93825.herokuapp.com/activities`,
        {
          target: target,
          user_id: id,
        }
      )
      .then((data) => {
        dispatch(addActivity(data.data))
        history.push('/progresspage')
      })
      .catch(error => {
        if (error.response) {
          return error.response
        }
      })
  }
  return (
    <div className='text-center steps-page'>
      <div className='add-steps-heading'>
        <h1>Add Steps</h1>
      </div>
      <h3>Add your running target in kilo meters</h3>
      <div className='steps-input'>
        <form onSubmit={handleSubmit} id="target-form">
          <input type="text" name="steps" placeholder="0.0" onChange={handleChange} required />
          <button type="reset" value="Reset" className="reset-btn" onClick={handleReset}>Reset</button>
          <button type="submit" className="submit-btn">Add</button>
        </form>
      </div>
    </div>
  )
}

export default StepsPage;
