// src/components/DomainsSection.jsx
"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./domain.css"

gsap.registerPlugin(ScrollTrigger)

// ── DATA ──────────────────────────────────────────────────────────────

const domains = [
  {
    id: 1,
    title: "Artificial Intelligence",
    subtitle: "Machine Learning & Deep Learning",
    description:
      "Build intelligent systems that learn, adapt, and transform industries with cutting-edge AI and neural network solutions.",
    color: "#a855f7",
    icon: "ai",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.RgJ4_NScOOWkifKc-5aVSQHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Web3 & Blockchain",
    subtitle: "Decentralized Applications",
    description:
      "Decentralize the future with smart contracts, DeFi protocols, and revolutionary blockchain applications.",
    color: "#0ea5e9",
    icon: "blockchain",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Tihg_xxRRXTO6a7jMM0-ZAHaDi?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    title: "HealthTech",
    subtitle: "Digital Healthcare Innovation",
    description:
      "Revolutionize healthcare with AI diagnostics, telemedicine platforms, and life-saving medical technologies.",
    color: "#10b981",
    icon: "health",
    image:
      "https://static.businessworld.in/benefits-of-tech-in-healthcare-scaled_20250421195050_original_image_20.webp",
  },
  {
    id: 4,
    title: "Sustainable Tech",
    subtitle: "Green Innovation & CleanTech",
    description:
      "Create technology for a sustainable tomorrow with renewable energy solutions and eco-friendly innovations.",
    color: "#84cc16",
    icon: "sustainable",
    image: "https://cdn.bap-software.net/2025/02/14235538/12p3.png",
  },
  {
    id: 5,
    title: "FinTech",
    subtitle: "Financial Technology",
    description:
      "Transform financial services with digital payments, algorithmic trading, and inclusive banking solutions.",
    color: "#f59e0b",
    icon: "fintech",
    image:
      "https://static.vecteezy.com/system/resources/previews/015/324/230/original/financial-technology-and-business-world-class-icon-fintech-and-things-on-dark-blue-technology-background-represents-the-connection-financial-technology-banking-and-business-world-class-vector.jpg",
  },
  {
    id: 6,
    title: "Open Innovation",
    subtitle: "Boundless Creativity",
    description:
      "Your wildest ideas welcome here. No boundaries, no limits — surprise us with your vision.",
    color: "#ec4899",
    icon: "open",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.SH43sFWW9Y0m8br3kwN7cgHaEK?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
]

const hackathonDetails = [
  "24-hour on-site build sprint",
  "On-ground mentors & tech experts",
  "Judging by industry professionals",
  "Prize pool & swag for top teams",
]

const signoffPoints = [
  "Come with an idea, leave with a product",
  "Perfect for portfolio & networking",
  "Push your limits and ship fast",
  "XYNTRA 2025 • Chennai",
]

// ── ICONS ─────────────────────────────────────────────────────────────

function DomainIcon({ type, color }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    className: "w-8 h-8",
  }

  switch (type) {
    case "ai":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3" fill={`${color}30`} />
          <circle cx="12" cy="12" r="8" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    case "blockchain":
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="6" height="6" rx="1" fill={`${color}30`} />
          <rect x="15" y="3" width="6" height="6" rx="1" fill={`${color}30`} />
          <rect x="9" y="15" width="6" height="6" rx="1" fill={`${color}30`} />
          <path d="M9 6h6M6 9v6l3 3M18 9v6l-3 3" />
        </svg>
      )
    case "health":
      return (
        <svg {...iconProps}>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={`${color}30`}
          />
          <path d="M12 8v8M8 12h8" strokeWidth={2} />
        </svg>
      )
    case "sustainable":
      return (
        <svg {...iconProps}>
          <path d="M12 22V13" />
          <path
            d="M12 13c0-5 4.5-8 8-8-1.5 5-3 8-8 8z"
            fill={`${color}30`}
          />
          <path
            d="M12 13c0-5-4.5-8-8-8 1.5 5 3 8 8 8z"
            fill={`${color}30`}
          />
          <ellipse cx="12" cy="22" rx="4" ry="1.5" />
        </svg>
      )
    case "fintech":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" fill={`${color}30`} />
          <path d="M12 6v12" strokeWidth={2} />
          <path d="M9 9h5a2 2 0 0 1 0 4H9" strokeWidth={2} />
          <path d="M9 13h6a2 2 0 0 1 0 4H9" strokeWidth={2} />
        </svg>
      )
    case "open":
      return (
        <svg {...iconProps}>
          <path
            d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8l-6 4.4 2.4-7.2-6-4.8h7.6L12 2z"
            fill={`${color}30`}
          />
        </svg>
      )
    default:
      return null
  }
}

// ── GRAND 3D CUBE (HOVER, CONSTANT SPEED, EXTRA FX) ──────────────────

function DomainCube({ domain, index, isActive }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, margin: "-60px" })

  const rotation = useMotionValue(0)
  const rotateY = useSpring(rotation, {
    stiffness: 60,
    damping: 20,
    mass: 1.1,
  })

  // subtle tilt on the whole card for float
  const floatY = [0, -8, 0]
  const floatShadow = [
    "0 18px 40px rgba(0,0,0,0.35)",
    "0 26px 60px rgba(0,0,0,0.45)",
    "0 18px 40px rgba(0,0,0,0.35)",
  ]

  const side = 360
  const half = side / 2

  // hover state for rotation
  const isHoveredRef = useRef(false)

  // one full rotation every 8s → 360 / 8 = 45deg/s
  const speedDegPerSec = 45

  useAnimationFrame((_time, delta) => {
    if (!isHoveredRef.current) return
    const deltaSeconds = delta / 1000
    const deltaDeg = speedDegPerSec * deltaSeconds
    rotation.set(rotation.get() + deltaDeg)
  })

  const handleHoverStart = () => {
    isHoveredRef.current = true
  }

  const handleHoverEnd = () => {
    isHoveredRef.current = false
  }

  return (
    <motion.div
      ref={cardRef}
      className={`domain-card-wrapper ${isActive ? "domain-card-active" : ""}`}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: floatY,
              scale: isActive ? 1.03 : 1,
              boxShadow: floatShadow,
            }
          : {}
      }
      transition={{
        opacity: { duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        scale: { duration: 0.3, ease: "easeOut" },
        boxShadow: {
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      style={{
        // color‑coded shadow/glow base
        boxShadow: `0 18px 40px ${domain.color}35, 0 0 0 1px ${domain.color}15`,
        borderRadius: 24,
      }}
    >
      {/* glow + shadow base layer */}
      <div
        className="domain-card-glow"
        style={{
          background: `radial-gradient(circle at top, ${domain.color}60, transparent 70%)`,
        }}
      />
      <div
        className="domain-card-shadow"
        style={{
          boxShadow: `0 40px 80px ${domain.color}40`,
        }}
      />

      <div className="domain-card-perspective">
        <motion.div
          style={{
            width: side,
            height: side,
            transformStyle: "preserve-3d",
            rotateY,
            cursor: "pointer",
          }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          whileHover={{
            scale: 1.06,
            rotateX: -6,
            rotateZ: 2,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
        >
          {/* FRONT */}
          <div
            className="cube-face cube-face-front"
            style={{
              transform: `translateZ(${half}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="cube-face-inner-border" />
            <div className="cube-face-inner-bg" />
            <div className="cube-face-content">
              <motion.div
                className="cube-icon-wrapper"
                style={{
                  backgroundColor: `${domain.color}24`,
                  boxShadow: `0 0 0 1px ${domain.color}40, 0 10px 30px ${domain.color}50`,
                }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
              >
                <DomainIcon type={domain.icon} color={domain.color} />
              </motion.div>
              <p
                className="cube-subtitle"
                style={{ color: domain.color }}
              >
                {domain.subtitle}
              </p>
              <h3
                className="cube-title"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {domain.title}
              </h3>
              <p className="cube-face-label">
                Face 1 · Overview
              </p>
              <p className="cube-face-description">
                Hover to spin this cube in place and explore every side of the domain.
              </p>
              <div className="cube-footer">
                <span className="cube-footer-hint">Hover to rotate</span>
                <span className="cube-footer-tag">
                  3D Domain Cube
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="cube-face cube-face-right"
            style={{
              transform: `rotateY(90deg) translateZ(${half}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="cube-face-border" />
            <div className="cube-face-content cube-face-content-right">
              <p className="cube-face-label">
                Face 2 · Visual
              </p>
              <div className="cube-image-outer">
                <div
                  className="cube-image-inner"
                  style={{
                    boxShadow: `0 16px 40px ${domain.color}45`,
                  }}
                >
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="cube-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div
            className="cube-face cube-face-back"
            style={{
              transform: `rotateY(180deg) translateZ(${half}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="cube-face-border" />
            <div className="cube-face-content">
              <p className="cube-face-label">
                Face 3 · Hackathon
              </p>
              <ul className="cube-list">
                {hackathonDetails.map((item, idx) => (
                  <li key={idx} className="cube-list-item">
                    <span
                      className="cube-list-dot"
                      style={{ backgroundColor: domain.color }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LEFT */}
          <div
            className="cube-face cube-face-left"
            style={{
              transform: `rotateY(-90deg) translateZ(${half}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="cube-face-border" />
            <div className="cube-face-content">
              <p className="cube-face-label">
                Face 4 · Why this track
              </p>
              <ul className="cube-list">
                {signoffPoints.map((item, idx) => (
                  <li key={idx} className="cube-list-item">
                    <span className="cube-list-bar" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TOP */}
          <div
            className="cube-face cube-face-top"
            style={{
              transform: `rotateX(90deg) translateZ(${half}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="cube-top-glow"
              style={{
                background: `radial-gradient(circle, ${domain.color}50, transparent 60%)`,
                boxShadow: `0 -18px 48px ${domain.color}35`,
              }}
            />
          </div>

          {/* BOTTOM */}
          <div
            className="cube-face cube-face-bottom"
            style={{
              transform: `rotateX(-90deg) translateZ(${half}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="cube-bottom-overlay"
              style={{
                boxShadow: `0 40px 90px ${domain.color}60`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ── SECTION WRAPPER ───────────────────────────────────────────────────

export function DomainsSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const chars = headerRef.current.querySelectorAll(".char")
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            transformOrigin: "center bottom",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.025,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ transformStyle: "preserve-3d" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="domains-section"
    >
      {/* background layer */}
      <motion.div
        className="domains-bg"
        style={{ y: backgroundY, opacity }}
      />

      <div className="domains-container">
        {/* header */}
        <div ref={headerRef} className="domains-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="domains-pill"
          >
            Challenge Tracks
          </motion.span>

          <h2
            className="domains-title"
            style={{ fontFamily: "var(--font-heading)", perspective: "1000px" }}
          >
            {splitText("Explore Domains")}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="domains-subtitle"
          >
            Hover each cube to slowly spin it in place. Soft shadows and subtle floating bring every domain block to life.
          </motion.p>
        </div>

        {/* cube grid */}
        <div className="domains-grid">
          {domains.map((domain, i) => (
            <div
              key={domain.id}
              className="domains-grid-item"
              onMouseEnter={() => setActiveIndex(i)}
            >
              <DomainCube
                domain={domain}
                index={i}
                isActive={activeIndex === i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
