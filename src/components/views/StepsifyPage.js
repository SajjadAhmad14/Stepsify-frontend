import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";
import isLoggedIn from "./isLoggedIn";
import CaloriesCard from "./CaloriesCard";
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
  const handleChange = (e) => {
    e.preventDefault();
    setSteps(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3000/activity_stats`,
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
      <CaloriesCard />
    </div>
  );
};

export default StepsifyPage;
