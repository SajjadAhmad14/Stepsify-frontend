import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";
import isLoggedIn from "./isLoggedIn";
import axios from "axios";

const StepsifyPage = () => {
  const history = useHistory()
  const [open, setIsOpen] = useState(false);
  const [steps, setSteps] = useState("");
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  const user = sessionStorage.getItem("user")
  const userInfo = JSON.parse(user)
  const id = userInfo.id
  axios.get(`http://localhost:3000/${id}/user_stats`, {
    user_id: id
  })
  .then(data=> {
    console.log(data)
  })
  const handleChange = (e) => {
    e.preventDefault();
    setSteps(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://stepsify.herokuapp.com/${id}/activity_stats`,
        {
          steps: steps,
          user_id: id,
        }
      )
      history.push('/progresspage')
  };
  const handleReset = () => {
    setIsOpen(false);
  };

  const stepsForm = () => {
    setIsOpen(true);
  };

  // const handleClick = () => {
  //   axios.get(`http://localhost:3000/api/v1/user_stats`, {
  //     user_id: userInfo.id
  //   })
  //     .then(data => {
  //       console.log(data)
  //     })
  // }
  
  return (
    <div className="stepsify-page">
      <div className="stepsify-nav text-center">
        <div className="add-steps-heading">
          <h1>Stepsify</h1>
        </div>
        <div>
          <AiOutlinePlus className="add-icon" onClick={stepsForm} />
        </div>
      </div>
      {open && (
        <form className="steps-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="steps"
            id="steps"
            placeholder="0.0"
            required
            onChange={handleChange}
          />
          <br />
          <div className="text-center">
            <button type="reset" className="cancel-step" onClick={handleReset}>
              Cancel
            </button>
            <button type="submit" className="submit-step">
              Submit
            </button>
          </div>
        </form>
      )}
      {/* <CaloriesCard /> */}
    </div>
  );
};

export default StepsifyPage;
