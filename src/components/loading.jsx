import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./loading.css";

const LOADING_LOGS = [
  "INITIALIZING_XYNTRA_CORE_V4.0.2",
  "LINKING_NEURAL_PROTOCOLS...",
  "BYPASSING_FIREWALL_STATIONS",
  "ESTABLISHING_QUANTUM_HANDSHAKE",
  "LOADING_BATTLEGROUNDS_DATA",
  "CALIBRATING_ORBITAL_TIMELINE",
  "SYNCING_PRIZE_INVENTORY",
  "AWAKENING_XYN_ROBOTICS_DIAGNOSTICS",
  "SYSTEM_OPTIMAL_STABILITY_99.9%",
  "DECRYPTING_HACKATHON_MANIFESTO",
  "READY_TO_CONQUER"
];

const Loading = ({ onComplete }) => {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) =>
        prev < LOADING_LOGS.length - 1 ? prev + 1 : prev
      );
    }, 250);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 150);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loading-root"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loading-grid" />

      <div className="loading-center">
        {/* 🔥 SHARED ROBOT */}
        <motion.div
          layoutId="xyntra-robot"
          animate={{
            scale: [1, 1.05, 1],
            filter: ["hue-rotate(0deg)", "hue-rotate(10deg)", "hue-rotate(0deg)"]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="robot-diagnostics"
        >
          <div className="hud-ring ring-1" />
          <div className="hud-ring ring-2" />

          <div className="robot-head">
            <div className="robot-face">
              <div className="robot-eyes">
                <motion.div
                  className="robot-eye"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                />
                <motion.div
                  className="robot-eye"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                />
              </div>
              <div className="robot-mouth" />
              <motion.div
                className="robot-scanline"
                animate={{ y: [-40, 40] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>

        <h1 className="loading-title">
          IEEE <span>XYNTRA</span>
        </h1>

        <div className="loading-subtitle">
          OPERATIONAL SECURITY LEVEL 04
        </div>

        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="progress-meta">
          <span>{Math.floor(progress)}%_COMPLETE</span>
          <span>BOOT_SEQ_00{logIndex}</span>
        </div>
      </div>

      <div className="terminal-logs">
        {LOADING_LOGS.slice(0, logIndex + 1).map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={i === logIndex ? "log-active" : "log-muted"}
          >
            {`> ${log}`}
          </motion.div>
        ))}
        <div className="terminal-cursor" />
      </div>

      <div className="top-right-meta">
        <div className="meta-small">PROTOCOL: FLAGSHIP_26</div>
        <div className="meta-large">ACCESS_RESTRICTED</div>
      </div>
    </motion.div>
  );
};

export default Loading;
