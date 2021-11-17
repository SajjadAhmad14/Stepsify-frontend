import { FaAngleRight } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";
import { useState } from "react";

const CaloriesCard = () => {
  const [today, setToday] = useState("");
  const [yesterday, setYesterday] = useState("");
  const [lastWeek1, setLastWeek1] = useState("");
  const [lastWeek2, setLastWeek2] = useState("");
  const [todayCalories, setTodayCalories] = useState(0.0);
  const [yesterdayCalories, setYesterdayCalories] = useState(0.0);
  const [lastWeekCalories1, setlastWeekCalories1] = useState(0.0);
  const [lastWeekCalories2, setlastWeekCalories2] = useState(0.0);
  const [todayTarget, settodayTarget] = useState(0.0);
  const [yesterdayTarget, setYesterdayTarget] = useState(0.0);
  const [lastWeek2Target, setLastWeek2Target] = useState(0.0);
  const [lastWeek1Target, setLastWeek1Target] = useState(0.0);
  const [todaySteps, setTodaySteps] = useState(0.0);
  const [yesterdaySteps, setYesterdaySteps] = useState(0.0);
  const [lastweek1Steps, setLastweek1Steps] = useState(0.0);
  const [lastweek2Steps, setLastweek2Steps] = useState(0.0);
  const user = sessionStorage.getItem("user");
  const userInfo = JSON.parse(user);
  const id = parseInt(userInfo.id);
  const todayStepsPercent = (todaySteps / todayTarget) * 100;
  const yesterdayStepsPercent = (yesterdaySteps / yesterdayTarget) * 100;
  const lastWeek1StepsPercent = (lastweek1Steps / lastWeek1Target) * 100;
  const lastWeek2StepsPercent = (lastweek2Steps / lastWeek2Target) * 100;
  axios
    .get(`http://localhost:3000/${id}/targets`, {
      user_id: id,
    })
    .then((data) => {
      settodayTarget(data.data.today_target);
      setYesterdayTarget(data.data.yesterday_target);
      setLastWeek1Target(data.data.last_week_1_target);
      setLastWeek2Target(data.data.last_week_2_target);
    });
  axios
    .get(`http://localhost:3000/${id}/user_stats`, {
      user_id: id,
    })
    .then((data) => {
      setToday(data.data.today);
      setYesterday(data.data.yesterday);
      setLastWeek1(data.data.last_week_1);
      setLastWeek2(data.data.last_week_2);
      setTodayCalories(data.data.today_calories);
      setYesterdayCalories(data.data.yesterday_calories);
      setlastWeekCalories1(data.data.last_week_1_calories);
      setlastWeekCalories2(data.data.last_week_2_calories);
      setTodaySteps(data.data.today_stats);
      setYesterdaySteps(data.data.yesterday_stats);
      setLastweek1Steps(data.data.last_week_1_stats);
      setLastweek2Steps(data.data.last_week_2_stats);
    });
  const changeDateFormat = (date) => {
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sep",
      "October",
      "November",
      "Dec",
    ];
    const month = parseInt(date.slice(5, 7));
    const year = date.slice(0, 4);
    const date_in_number = date.slice(8, 10);
    const month_name = months[month - 1];
    return month_name + " " + date_in_number + " " + year;
  };
  return (
    <>
      <div className="calories-card">
        <h3>Today</h3>
        <div className="card">
          <div style={{ width: 200 }}>
            <CircularProgressbar
              value={todayStepsPercent}
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
          </div>
          <div className="date">
            {changeDateFormat(today)}
            <div className="calories">{todayCalories} calories</div>
          </div>
          <div className="steps">
            {todaySteps}
            <span>km</span>steps
            <FaAngleRight />
          </div>
        </div>
        <h3>Yesterday</h3>
        <div className="card">
          <div style={{ width: 200 }}>
            <CircularProgressbar
              value={yesterdayStepsPercent}
              className="steps-progress"
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
          </div>
          <div className="date">
            {changeDateFormat(yesterday)}
            <div className="calories">{yesterdayCalories} calories</div>
          </div>
          <div className="steps">
            {yesterdaySteps}
            <span>km</span>steps
            <FaAngleRight />
          </div>
        </div>
        <h3>Last week</h3>
        <div className="card">
          <div style={{ width: 200 }}>
            <CircularProgressbar
              value={lastWeek2StepsPercent}
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
                  fill: "#67899c",
                  fontSize: "16px",
                },
                background: {
                  fill: "#3e98c7",
                },
              }}
            />
          </div>
          <div className="date">
            {changeDateFormat(lastWeek2)}
            <div className="calories">{lastWeekCalories2} calories</div>
          </div>
          <div className="steps">
            {lastweek2Steps}
            <span>km</span>steps
            <FaAngleRight />
          </div>
        </div>
        <div className="card">
          <div style={{ width: 200 }}>
            <CircularProgressbar
              value={lastWeek1StepsPercent}
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
          </div>
          <div className="date">
            {changeDateFormat(lastWeek1)}
            <div className="calories">{lastWeekCalories1} calories</div>
          </div>
          <div className="steps">
            {lastweek1Steps}
            <span>km</span>steps
            <FaAngleRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaloriesCard;
