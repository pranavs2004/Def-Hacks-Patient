import React from "react";

export default function DayScheduler(props) {
  let text;
  props.isStart
    ? (text = "Select a a start time")
    : (text = "Select an end time");
  if (props.isLocked) {text = "Submit your appointment"};
  //splits the day into 96 (which is 24 * 4) fifteen minute intervals
  const intveralNumbers = [];
  for (let i = 0; i < 48; i++) {
    intveralNumbers.push(i);
  }
  let hours = intveralNumbers.map(interval => {
    let hour;
    let minutes;
    let meridian;
    interval < 24 ? (meridian = "AM") : (meridian = "PM");
    Math.floor(interval / 2) % 12 === 0
      ? (hour = "12")
      : (hour = (Math.floor(interval / 2) % 12).toString());
    interval % 2 === 0
      ? (minutes = "00")
      : (minutes = ((interval * 30) % 60).toString());
    return (
      <div>
        <label className="checkBoxLabel">
          <input
            type="checkBox"
            value={interval}
            className="checkBox"
            disabled={
              (props.isLocked || props.disabledTimes.includes(interval)) &&
              !props.selectedTime.includes(interval.toString())
            }
            onChange={props.onChange}
          />
          {hour + ":" + minutes + " " + meridian}
        </label>
        <br />
      </div>
    );
  });

  return (
    <div>
      <div>
        <div>{text}</div>
        {props.currentDate
          .add(
            props.selectedDate.getAttribute("date") -
              props.currentDate.format("DD"),
            "days"
          )
          .format("dddd MMM DD YYYY")}
      </div>
      <div>{hours}</div>
    </div>
  );
}
