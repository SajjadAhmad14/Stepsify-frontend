import { FaAngleRight } from "react-icons/fa";
import axios from "axios";
import { useState } from 'react'

const CaloriesCard = () => {
  const [today, setToday] = useState('')
  const [yesterday, setYesterday] = useState('')
  const [lastWeek, setLastWeek] = useState('')
  const id = localStorage.getItem("id")
  axios.get(`http://localhost:3000/api/v1/activities/${id}/activity_stats`)
  .then(data => {
    console.log(data)
  })
  // const date = item.item.date;
  // const month = parseInt(date.slice(5, 7));
  // const year = date.slice(0, 4);
  // const date_1 = date.slice(8, 10);
  // const steps = item.item.steps;
  // const calories = item.item.calories;
  // const months = [
  //   "Jan",
  //   "Feb",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "Sep",
  //   "October",
  //   "November",
  //   "Dec",
  // ];
  // const month_name = months[month - 1];
  return (
    <div className="calories-card">
      <div className="date">
        {/* {month_name + " " + date_1 + " " + year} */}
        <div className="calories">
          {/* {calories} calories */}
        </div>
      </div>
      <div className="steps">steps<span>km</span><FaAngleRight /></div>
    </div>
  );
};

export default CaloriesCard;
