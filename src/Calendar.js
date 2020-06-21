import React from "react";
import moment from "moment";

export default function Calendar(props) {
  const shortNames = moment.weekdaysShort();
  const dayNames = shortNames.map(day => {
    return (
      <th key={day} className="calendarHeader">
        {day}
      </th>
    );
  });

  function getFirstDay() {
    return moment(props.date)
      .startOf("month")
      .format("d");
  }

  function handleClick() {
    props.onChange();
  }

  const emptyDates = [];

  for (let i = 0; i < getFirstDay(); i++) {
    emptyDates.push(<td className="dayTile" />);
  }

  const daysInMonth = [];

  for (let i = 1; i < props.date.daysInMonth(); i++) {
    let className;
    let canClick;
    if (i < props.date.date()) {
      className = "dayTilePast";
    } else if (i > props.date.date()) {
      className = "dayTileFuture";
      canClick = true;
    } else {
      className = "dayTileToday";
      canClick = true;
    }

    emptyDates.push(
      <td key={i} className={className} onClick={canClick ? handleClick : null}>
        {i}
      </td>
    );
  }

  const totalDays = [...emptyDates, ...daysInMonth];

  let weeks = [];
  let rows = [];

  totalDays.forEach((day, i) => {
    if (i % 7 !== 0) {
      weeks.push(day);
    } else {
      rows.push(weeks);
      weeks = [];
      weeks.push(day);
    }
    if (i === totalDays.length - 1) {
      rows.push(weeks);
    }
  });

  let daysinmonth = rows.map(d => {
    return <tr>{d}</tr>;
  });
  return (
    <table>
      <thead className="MonthHeader">{props.date.format("MMMM")}</thead>
      <tr>{dayNames}</tr>
      <tbody>{daysinmonth}</tbody>
    </table>
  );
}
