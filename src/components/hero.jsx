import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import macbook from "../assets/macbook3.png";
import Navbar from "./navbar";
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
      {/* 🌌 Hero Background Image */}
      <div className="hero-bg" />

      {/* ✨ Stars ABOVE background */}
      <StarBackground className="hero-stars" />

      {/* ================= MANIFESTO SECTION ================= */}
      <div className="section-container manifesto-container">
        {/* Left Side Content */}
        <div className="manifesto-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="manifesto-header"
          >
            <h1 className="manifesto-title heading-font">XYNTRA</h1>
            <p className="manifesto-tagline body-font">CODE. CREATE. CONQUER.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="manifesto-description"
          >
            <h3 className="heading-font">Prepare to hack the future.</h3>
            <p className="body-font">
              Join us on IEEE XYNTRA and be part of a ground-breaking
              hackathon experience unlike any other.
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="manifesto-actions"
          >
            <button className="btn-initiate">INITIATE_PROTOCOL</button>
            <button className="btn-manifesto">VIEW_MANIFESTO</button>
          </motion.div> */}
        </div>

        {/* Right Side Slot */}
        <div className="manifesto-visual-slot">
          {/* optional future asset */}
        </div>
      </div>

      {/* HUD Decoration */}
      <div className="manifesto-hud">
        <div className="hud-line" />
        <div className="hud-coords">
          <span>LAT: 32.7157° N</span>
          <span>LNG: 117.1611° W</span>
        </div>
      </div>

      {/* ================= LAPTOP SECTION ================= */}
      <div className="laptop-wrapper">
        {/* Purple glow */}
        <div className="laptop-glow" />

        {/* Laptop frame */}
        <img src={macbook} className="laptop-frame" alt="MacBook" />

        {/* Screen */}
        <div className="laptop-screen">
          {/* Grid background */}
          <div className="screen-bg" />

          {/* Actual website inside laptop */}
          <div className="screen-scale">
            <Navbar />
            <div className="hero-content">
              <h1 className="heading-font">IEEE XYNTRA</h1>
              <p className="body-font">Code. Create. Conquer.</p>
              <Countdown targetDate="2026-03-17T09:00:00" />
              <button className="reg-btn">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
