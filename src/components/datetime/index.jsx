import React from "react";
import "./datetime.scss";

function DateTimeComponent(props) {
  return (
    <section className="datetime">
      <div className="datetime__time">{props.time}</div>
      <div className="datetime__title">{props.title}</div>
    </section>
  );
}

export default DateTimeComponent;
