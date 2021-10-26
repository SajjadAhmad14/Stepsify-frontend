import { useDispatch } from 'react'
import allActions from '../store/actions/index'
const axios = require("axios");

const CheckLogin = () => {
  // const dispatch = useDispatch()
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
      // dispatch(allActions.login(data))
    })
    .catch((error) => {
      if (error.response) {
        localStorage.removeItem("token");
      }
    });
};

export default CheckLogin;