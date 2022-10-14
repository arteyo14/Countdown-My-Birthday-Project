import { useState, useEffect } from "react";
import Introduction from "./components/intro";
import DateTimeComponent from "./components/datetime";
import "./App.css";

function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = (birthday) => {
    let today = new Date().getTime();
    let timeCount = birthday - today;
    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000);

    setTime({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    setInterval(() => {
      let day = 25;
      let month = 9;
      let year =
        new Date().getMonth() + 1 > month
          ? new Date().getFullYear() + 1
          : new Date().getMonth() + 1 === month && new Date().getDate() > day
          ? new Date().getFullYear() + 1
          : new Date().getFullYear();
      let birthDate = new Date(`${month}/${day}/${year}`).getTime();
      countDown(birthDate);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Introduction />
      <div className="container">
        <DateTimeComponent time={time.days} title="Date" />
        <DateTimeComponent time={time.hours} title="Hour" />
        <DateTimeComponent time={time.minutes} title="Minute" />
        <DateTimeComponent time={time.seconds} title="Second" />
      </div>
    </div>
  );
}

export default App;
