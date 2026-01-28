import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const TAGLINE = "CODE · CREATE · CONQUER";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(TAGLINE.slice(0, i + 1));
      i++;
      if (i === TAGLINE.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 500);
        }, 600);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`statement-loader ${done ? "fade-out" : ""}`}>
  <div className="ambient-bg" />

      <div className="statement-center">
        <h1 className="statement-title">XYNTRA</h1>
        <p className="statement-tagline">{text}</p>
      </div>
    </div>
  );
}
