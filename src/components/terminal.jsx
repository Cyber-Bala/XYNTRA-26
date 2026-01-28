import React, { useEffect, useRef, useState } from "react";
import "./terminal.css";

const LINES = [
  "boot :: xyntra-runtime@2.0",
  "loading event configuration...",
  "category = National (36 hrs)",
  "mode = Onsite",
  "tracks = Web | AI | IoT",
  "location = Rajalakshmi Engineering College",
  "allocating teams...",
  "runtime_status = ACTIVE"
];

export default function Terminal() {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const timeoutRef = useRef(null);

  // Build full terminal output string
  const fullText = LINES.map(line => `> ${line}\n`).join("");

  const startTyping = () => {
    if (isTyping) return;

    setDisplayText("");
    setCharIndex(0);
    setIsTyping(true);
    setIsDone(false);
  };

  useEffect(() => {
    if (!isTyping) return;

    if (charIndex < fullText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(prev => prev + fullText[charIndex]);
        setCharIndex(i => i + 1);
      }, 28); // typing speed (lower = faster)
    } else {
      setIsTyping(false);
      setIsDone(true);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isTyping, fullText]);

  // Initial boot typing
  useEffect(() => {
    startTyping();
  }, []);

  // Hover → restart ONLY if finished
  const handleHover = () => {
    if (isDone && !isTyping) {
      startTyping();
    }
  };

  return (
    <div className="runtime-terminal" onMouseEnter={handleHover}>
      {/* Header */}
      <div className="runtime-header">
        <div className="runtime-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="runtime-title">EVENT_RUNTIME • LIVE</span>
      </div>

      {/* Body */}
      <div className="runtime-body">
        {/* Sidebar */}
        <div className="runtime-meta">
          <div className="meta-box">
            <span className="meta-label">Category</span>
            <span className="meta-value">National · 36Hrs</span>
          </div>

          <div className="meta-box">
            <span className="meta-label">Mode</span>
            <span className="meta-value">Onsite</span>
          </div>

          <div className="meta-box">
            <span className="meta-label">Tracks</span>
            <span className="meta-value">Web · AI · IoT</span>
          </div>
        </div>

        {/* Terminal output */}
        <pre className="runtime-code">
{displayText}
{(isTyping || isDone) && <span className="cursor">█</span>}
        </pre>
      </div>
    </div>
  );
}
