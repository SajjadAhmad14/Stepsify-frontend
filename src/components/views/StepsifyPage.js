import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { Redirect } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";
import isLoggedIn from './isLoggedIn'
import axios from "axios";

const StepsifyPage = () => {  
  const [open, setIsOpen] = useState(false)
  const [steps, setSteps] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    setSteps(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get("http://localhost:3000/auto_login", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      if (error.response) {
        localStorage.removeItem("token");
      }
    });
    // if(id) {
    //   axios.post(`http://localhost:3000/api/v1/activities/${id}/activity_stats`, {
    //     steps: steps,
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    // }
  }

  const handleReset = () => {
    setIsOpen(false);
  }

  const stepsForm = () => {
    setIsOpen(true);
  };
  if(!isLoggedIn()) {
    return <Redirect to='/login'/>
  }
  return (
    <div className="text-center stepsify-page">
      <div className="add-steps-heading">
        <h1>Stepsify</h1>
      </div>
      <div>
        <AiOutlinePlus className="add-icon" onClick={stepsForm} />
      </div>
      {open && (
        <form className='steps-form' onSubmit={handleSubmit}>
          <input type="text" name="steps" id="steps" placeholder="0.0" required onChange={handleChange} /><br />
          <button type="reset" className="cancel-step" onClick={handleReset}>Cancel</button>
          <button type="submit" className="submit-step">Submit</button>
        </form>
      )}
    </div>
  );
};

export default StepsifyPage;
