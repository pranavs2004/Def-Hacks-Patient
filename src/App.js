import React, { useState } from "react";
import "./styles.css";
import Calendar from "./Calendar.js";
import DayScheduler from "./DayScheduler.js";
import moment from "moment";

export default function App() {
  const [date] = useState(moment());
  const [screenLevel, setLevel] = useState("month");
  let screen;
  screenLevel === "month"
    ? (screen = <Calendar date={date} onChange={handleChange} />)
    : (screen = <DayScheduler date={date} onChange={handleChange} />);
  function handleChange() {
    setLevel("day");
  }

  return <div className="App">{screen}</div>;
}
