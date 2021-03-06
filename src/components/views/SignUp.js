/* eslint-disable */
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions/index';

const axios = require('axios');

const SignUp = () => {
  const dispatch = useDispatch();
  const notify = (error) => {
    toast.error(`${error}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const [name, setName] = useState('');
  const [height, setHeight] = useState(0.0);
  const [weight, setWeight] = useState(0.0);
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('Male');
  const history = useHistory();
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleHeight = (e) => {
    const height = parseFloat(e.target.value);
    setHeight(height);
  };

  const handleWeight = (e) => {
    const weight = parseFloat(e.target.value);
    setWeight(weight);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSex = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://stark-garden-93825.herokuapp.com/users', {
      username: name,
      height: height,
      weight: weight,
      sex: sex,
      password: password,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((data) => {
        dispatch(allActions.signUp(data.data.user.username));
        sessionStorage.setItem('token', JSON.stringify({
          token: data.data.token,
        }));
        history.push('/login');
      })
      .catch((error) => {
        if (error.response) {
          notify(error.response.data.errors);
        }
      });
  };

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
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Your name here" required onChange={handleName} />
          <br />
          <input type="text" name="height" id="height" placeholder="Your height here in feet here" required onChange={handleHeight} />
          <br />
          <input type="text" name="weight" id="weight" placeholder="Your weight in kg here" required onChange={handleWeight} />
          <br />
          <input type="password" name="password" id="password" placeholder="Password here" required onChange={handlePassword} />
          <br />
          <select name="sex" id="sex" onClick={handleSex}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="btn-wrapper">
            <input type="submit" name="submit" id="submit-btn" value="Sign Up" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
