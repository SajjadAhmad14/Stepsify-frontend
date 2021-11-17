import React, { useState } from "react";
import { Redirect } from "react-router";
import isLoggedIn from "./isLoggedIn";
import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const axios = require("axios");

const ProgressPage = () => {
  const [steps, setSteps] = useState(0.0);
  const [target, setTarget] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [weight, setWeight] = useState(0.0);
  const [calories, setCalories] = useState(0.0);
  const [bmi, SetBmi] = useState(0.0);
  const stepsPercent = (steps / target) * 100;
  const targetPercent = 100 - stepsPercent;
  const targetLeft = (target - steps).toFixed(1);
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  const user = sessionStorage.getItem("user");
  const userInfo = JSON.parse(user);
  const id = parseInt(userInfo.id);
  axios
    .get(`https://stark-garden-93825.herokuapp.com/${id}/targets`, {
      user_id: id,
    })
    .then((data) => {
      setTarget(data.data.today_target);
    });
  axios
    .get(`https://stark-garden-93825.herokuapp.com/${id}/user_stats`, {
      user_id: id,
    })
    .then((data) => {
      setSteps(data.data.today_stats);
      setHeight(data.data.height);
      setWeight(data.data.weight);
      setCalories(data.data.today_calories);
      SetBmi(data.data.bmi);
    });
  return (
    <>
      <div className="progress-page">
        <div className="progress-nav text-center">
          <div className="progress-heading">
            <h1>Progress report</h1>
          </div>
        </div>
        <div style={{ height: 200 }} className="steps-container">
          <CircularProgressbarWithChildren
            className="target-progress"
            value={stepsPercent}
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
                fontSize: "16px",
              },
              background: {
                fill: "#3e98c7",
              },
            }}
          >
            <div style={{ marginTop: -15 }} className="steps-text">
              You ran
            </div>
            <div>
              <strong>{steps}</strong>
            </div>
            <div className="steps-text-2">Km</div>
          </CircularProgressbarWithChildren>
        </div>
        <div
          style={{ paddingLeft: -100 }}
          className="target-progress-container"
        >
          <CircularProgressbar
            value={targetPercent}
            text={`${targetLeft}`}
            className="steps-progress"
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
                fill: "#67899c",
                fontSize: "16px",
              },
              background: {
                fill: "#3e98c7",
              },
            }}
          />
          <div>Km to run</div>
        </div>
        <div className="stats-grid">
          <div className="item">
            <div className="stats-head">Current Weight</div>
            <div className="stats-value">{weight}</div>
            <div className="stats-head">Kg</div>
          </div>
          <div className="item">
            <div className="stats-head">BMI</div>
            <div className="stats-value">{bmi}</div>
          </div>
          <div className="item">
            <div className="stats-head">Height</div>
            <div className="stats-value">{height}</div>
            <div className="stats-head">Feet</div>
          </div>
          <div className="item">
            <div className="stats-head">Calories Burnt Today</div>
            <div className="stats-value">{calories}</div>
          </div>
        </div>
        <div className="btns">
          <button type="submit" className="btn-1">
            Manage
          </button>
          <button type="submit" className="btn-2">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgressPage;
