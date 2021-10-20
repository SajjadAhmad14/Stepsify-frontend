import React, { useState } from "react";
import { Redirect } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";

const StepsifyPage = () => {
  const isLoggedIn = !!localStorage.getItem('token')
  const [open, setIsOpen] = useState(false);
  const stepsForm = () => {
    setIsOpen(true);
  };
  if(!isLoggedIn) {
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
        <form className='steps-form'>
          <input type="text" name="steps" id="steps" placeholder="0.0" required /><br />
          <button type="reset" className="cancel-step">Cancel</button>
          <button type="submit" className="submit-step">Submit</button>
        </form>
      )}
    </div>
  );
};

export default StepsifyPage;
