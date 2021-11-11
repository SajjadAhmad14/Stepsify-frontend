import React, { useState } from "react";
import { Redirect } from "react-router";
import isLoggedIn from "./isLoggedIn";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const axios = require("axios");

const ProgressPage = () => {
  // const percentage = 66;
  const [steps, setSteps] = useState(0.0);
  const [target, setTarget] = useState(0.0);
  const stepsPercent = (steps / target) * 100;
  const targetPercent = 100 - stepsPercent;
  const targetLeft = target - steps;
  const user = sessionStorage.getItem("user");
  const userInfo = JSON.parse(user);
  const id = parseInt(userInfo.id);
  axios
    .get(`http://localhost:3000/${id}/targets`, {
      user_id: id,
    })
    .then((data) => {
      setTarget(data.data.sum);
    });
  axios
    .get(`http://localhost:3000/${id}/user_stats`, {
      user_id: id,
    })
    .then((data) => {
      setSteps(data.data.sum);
    });
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  console.log(target);
  console.log(steps);
  console.log(stepsPercent);
  console.log(targetLeft)
  return (
    <>
      <div className="progress-page">
        <div className="progress-nav text-center">
          <div className="progress-heading">
            <h1>Progress report</h1>
          </div>
        </div>
        <CircularProgressbar
          value={stepsPercent}
          text={`${30}`}
          className="steps-progress"
          styles={{
            root: {},
            path: {
              stroke: `#addc91`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "#d6d6d6",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            text: {
              fill: "#f88",
              fontSize: "16px",
            },
            background: {
              fill: "#3e98c7",
            },
          }}
        />
        <div className = "target-progress-container">
          <CircularProgressbar
            value={targetPercent}
            text={`${targetLeft}`}
            className="target-progress"
            counterClockwise="true"
            styles={{
              root: {},
              path: {
                stroke: `red`,
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#d6d6d6",
                strokeLinecap: "butt",
                transform: "rotate(0.1turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#f88",
                fontSize: "16px",
              },
              background: {
                fill: "#3e98c7",
              },
            }}
          />
          <div>Km to run</div>
        </div>
      </div>
    </>
  );
};

export default ProgressPage;
