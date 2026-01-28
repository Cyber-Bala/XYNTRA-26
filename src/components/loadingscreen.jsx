import React, { useState, useEffect, useRef } from "react"
import "./LoadingScreen.css"

const SYSTEM_LOGS = [
  "INITIALIZING_XYNTRA_CORE_v2.5",
  "ESTABLISHING_ENCRYPTED_UPLINK...",
  "MAPPING_ORBITAL_VECTORS",
  "SYNCING_NEURAL_PATHWAYS",
  "DECRYPTING_SECTOR_7_LOGS",
  "CALIBRATING_HAPTIC_INTERFACE",
  "AUTHORIZING_ELITE_OPERATIVES",
  "LOADING_ASSET_VALOR_POOL",
  "CORE_TEMPERATURE_STABLE",
  "READY_FOR_INITIALIZATION"
]

const TOTAL_DURATION = 2400 // ms
const TICK_RATE = 50 // ms
const STEP = 100 / (TOTAL_DURATION / TICK_RATE)

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentLog, setCurrentLog] = useState(SYSTEM_LOGS[0])
  const [glitch, setGlitch] = useState(false)

  const completedRef = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (!completedRef.current) {
            completedRef.current = true
            clearInterval(interval)
            setTimeout(onComplete, 400)
          }
          return 100
        }

        const next = Math.min(prev + STEP, 100)

        const logIndex = Math.floor((next / 100) * SYSTEM_LOGS.length)
        setCurrentLog(SYSTEM_LOGS[logIndex] || SYSTEM_LOGS.at(-1))

        if (Math.random() > 0.9) {
          setGlitch(true)
          setTimeout(() => setGlitch(false), 50)
        }

        return next
      })
    }, TICK_RATE)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`loading-screen ${glitch ? "glitch-active" : ""}`}>
      <div className="loading-grid-bg" />
      <div className="scanning-line" />

      <div className="loading-content">
        <div className="logo-glitch-container">
          <div className="loading-logo-box">
            <span className="loading-logo-letter">XYNTRA26</span>
          </div>
          <div className="logo-ghost">XYNTRA26</div>
          <div className="logo-ghost">XYNTRA26</div>
        </div>

        <div className="boot-terminal">
          <span className="terminal-sup">SYSTEM_BOOT_SEQUENCE</span>

          <div className="progress-value-wrap">
            <span className="progress-percentage">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="main-progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
            <div className="progress-glow" style={{ width: `${progress}%` }} />
          </div>

          <div className="terminal-status">
            <span className="status-cursor" />
            <span className="status-text">{currentLog}</span>
          </div>
        </div>
      </div>

      <div className="corner-deco tl">0x-99</div>
      <div className="corner-deco tr">UPLINK_STABLE</div>
      <div className="corner-deco bl">BUFFER_OK</div>
      <div className="corner-deco br">v2.5.0</div>
    </div>
  )
}

export default LoadingScreen
