const CaloriesCard = (item) => {
  const date = item.item.date
  console.log(date)
  const month = parseInt(date.slice(5, 7))
  const year = (date.slice(0, 4))
  const date_1 = (date.slice(8, 10))
  const steps = item.item.steps
  const calories = item.item.calories
  const months = [
    "Jan", "Feb", "March", "April", "May",
    "June", "July", "August", "Sep", "October",
    "November", "Dec"
  ]
  const month_name = months[month-1]
  return(
    <div className='calories-card'>
      <div className="date">
        {month_name + date_1 + year}
      </div>
      <div>
        {steps}
        {calories}
      </div>
    </div>
  )
};

export default CaloriesCard;
