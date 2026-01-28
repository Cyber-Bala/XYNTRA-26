import React from "react";
import "./terminal.css";

export default function TerminalNavbar() {
  return (
    <div className="terminal-navbar">
      <div className="terminal-dots">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>

      <div className="terminal-title">
        root@xyntra: ~
      </div>
    </div>
  );
}
