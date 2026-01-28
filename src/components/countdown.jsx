import { useEffect, useState } from "react";
import "./countdown.css"

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now();

  if (total <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <TimeBox label="DD" value={timeLeft.days} />
      <Colon />
      <TimeBox label="HH" value={timeLeft.hours} />
      <Colon />
      <TimeBox label="MM" value={timeLeft.minutes} />
      <Colon />
      <TimeBox label="SS" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <span className="time">{String(value).padStart(2, "0")}</span>
      <span className="label">{label}</span>
    </div>
  );
}

function Colon() {
  return <span className="colon">:</span>;
}
