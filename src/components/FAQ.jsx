"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./FAQ.css"

const FAQ_DATA = [
  {
    question: "What is Xyntra Hack about?",
    tag: "Overview",
    answer:
      "Xyntra Hack is a next-gen hackathon focused on bold ideas in web, AI, and immersive experiences. It’s where you ship a daring prototype in an intense, high-energy sprint.",
  },
  {
    question: "Who can participate?",
    tag: "Eligibility",
    answer:
      "Students, indie builders, and professionals are all welcome. If you can build software and enjoy fast, collaborative chaos, you’re in the right place.",
  },
  {
    question: "Is this event online or offline?",
    tag: "Format",
    answer:
      "Xyntra Hack runs as a hybrid experience: an in-person main floor plus a dedicated remote track with mentors, support, and judging parity for online teams.",
  },
  {
    question: "How long does the hackathon last?",
    tag: "Schedule",
    answer:
      "The hack typically runs for 24–48 hours over a weekend, with an opening ceremony, build window, mentor slots, and a finale showcase packed into the timeline.",
  },
  {
    question: "What can I build?",
    tag: "Projects",
    answer:
      "Anything from web apps and AI tools to games, AR/VR experiments, or creative installations—as long as the core of the project is built during the event.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = FAQ_DATA[activeIndex]

  return (
    <section id="faq" className="faq-section">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="faq-header"
      >
        <div>
          <p className="faq-eyebrow">Questions</p>
          <h2 className="faq-title">
            Frequently asked <span>questions</span>
          </h2>
          <p className="faq-subtitle">
            The essentials builders usually ask before locking in their spot.
          </p>
        </div>
      </motion.div>

      {/* Layout */}
      <div className="faq-layout">
        {/* Left list */}
        <div className="faq-list">
          {FAQ_DATA.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <button
                key={item.question}
                className={`faq-item ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="faq-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="faq-meta">
                  <span className="faq-tag">{item.tag}</span>
                  <span className="faq-question">{item.question}</span>
                </div>
                <span className="faq-arrow">›</span>
              </button>
            )
          })}
        </div>

        {/* Right answer */}
        <motion.div
          className="faq-answer"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35 }}
            >
              <p className="answer-tag">{activeItem.tag}</p>
              <h3 className="answer-question">
                {activeItem.question}
              </h3>
              <p className="answer-text">{activeItem.answer}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
