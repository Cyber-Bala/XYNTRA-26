import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import macbook from "../assets/macbook3.png";
import Terminal from "./terminal";
import Countdown from "./countdown";
import StarBackground from "./starbackground";

import "./hero.css";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" />
      <StarBackground className="hero-stars" />

      <div className="section-container manifesto-container">
        <div className="manifesto-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="manifesto-header"
          >
            <h1 className="manifesto-title heading-font">XYNTRA26</h1>
            <p className="manifesto-tagline body-font">
              CODE. CREATE. CONQUER.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="manifesto-description"
          >
            <div className="cta-group">
              <Countdown targetDate="2026-03-17T09:00:00" />
              <button className="reg-btn hero-btn">Register Now</button>
              <button className="view-btn hero-btn">View Timeline ⟶</button>
            </div>
          </motion.div>
        </div>

        <div className="manifesto-visual-slot" />
      </div>

      <div className="manifesto-hud">
        <div className="hud-line" />
        <div className="hud-coords">
          <span>LAT: 32.7157° N</span>
          <span>LNG: 117.1611° W</span>
        </div>
      </div>

      {/* ================= LAPTOP ================= */}
      <div className="laptop-wrapper">
        <div className="laptop-glow" />
        <img src={macbook} className="laptop-frame" alt="MacBook" />

        <div className="laptop-screen">
          <div className="screen-bg" />


          <div className="screen-scale">
            <Terminal />
          {/* 🔥 ROBOT ARRIVES HERE */}
          <div className="robot-inside-screen">
            <motion.div
              layoutId="xyntra-robot"
              className="robot-diagnostics"
              style={{ scale: 0.45 }}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
