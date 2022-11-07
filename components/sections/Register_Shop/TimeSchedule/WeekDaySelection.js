import React from 'react'

const WeekDaySelection = () => {
  return (
    <div>
    {Object.keys(WeekDays).map((day, index) => {
      return (
        <>
          <button
            key={day}
            className={
              WeekDays[day].val === false
                ? "rounded-full border-gray-400 border-solid border-2 border-spacing-1 w-14 h-14"
                : "rounded-full border-pink-700 border-solid border-2 border-spacing-1 w-14 h-14"
            }
            onClick={(e) => {
              const dum = [...WeekDays];
              dum[day].val = dum[day].val ? false : true;
              setWeekDays(() => dum);
              console.log(WeekDays, day);
            }}
          >
            {/* {day.Day.at()} */}
            {WeekDays[day].Day[0]}
            {/* {index} */}
          </button>
        </>
      );
    })}
  </div>
  )
}

export default WeekDaySelection