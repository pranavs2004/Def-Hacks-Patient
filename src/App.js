import React, { useState } from "react";
import "./styles.css";
import Calendar from "./Calendar.js";
import DayScheduler from "./DayScheduler.js";
import moment from "moment";

export default function App() {
  const [currentDate] = useState(moment());
  const [screenLevel, setLevel] = useState("month");
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime] = useState([]);
  const [disabledTimes, setDisableTimes] = useState([]);
  const [isLocked, setLock] = useState(false);
  const [isStart, flipStart] = useState(true);
  let screen;
  screenLevel === "month"
    ? (screen = <Calendar currentDate={currentDate} onChange={handleChange} />)
    : (screen = (
        <DayScheduler
          isStart={isStart}
          isLocked={isLocked}
          currentDate={currentDate}
          disabledTimes={disabledTimes}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onChange={handleChange}
        />
      ));
  function pushNums(array, n) {
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
  }

  function handleChange(event) {
    let checked = event.target.checked;
    console.log(checked);
    if (event.target.getAttribute("type") === "levelElement") {
      setLevel("day");
      setSelectedDate(event.target);
    } else if (
      event.target.getAttribute("type") === "checkBox" &&
      event.target.checked
    ) {
      let newElement = event.target.value;
      selectedTime.push(newElement);
      console.log(selectedTime); //conlog
      isStart && pushNums(disabledTimes, event.target.value);
      selectedTime.length === 1 && flipStart(false);
      console.log(disabledTimes); //conlog
      selectedTime.length === 2 && setLock(true);
    } else if (
      event.target.getAttribute("type") === "checkBox" &&
      !event.target.checked
    ) {
      let newElement = event.target.value;
      selectedTime.pop(newElement);
      setDisableTimes([]);
      selectedTime.length === 0 && flipStart(true);
      console.log(disabledTimes);
      setLock(false);
    }
  }

  return (
    <div>
      <div className="App">{screen}</div>
    </div>
  );
}
