import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type FAQItem = {
  question: string
  answer: string
  tag: string
}

const FAQ_DATA: FAQItem[] = [
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

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeItem = FAQ_DATA[activeIndex]

  return (
    <section
      id="faq"
      className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col gap-12 px-6 py-24 sm:px-10 lg:px-0"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.5em] text-purple-400/80">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-300/90 sm:text-lg">
            The essentials builders usually ask before locking in their spot.
          </p>
        </div>

        {/* Tiny glowing meta block */}
        <motion.div
          className="group relative mt-3 inline-flex items-center gap-3 rounded-full border border-purple-500/30 bg-slate-900/60 px-4 py-2 text-xs text-slate-300/90 backdrop-blur md:mt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
          </span>
          <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-300/90">
            Updated live as the event evolves.
          </span>
        </motion.div>
      </motion.div>

      {/* Layout */}
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-start">
        {/* Left list */}
        <div className="relative">
          <div className="pointer-events-none absolute left-[0.9rem] top-0 h-full w-px bg-gradient-to-b from-purple-500/50 via-slate-500/40 to-transparent" />

          <motion.div
            className="pointer-events-none absolute left-1 right-0 z-0 h-[3.2rem] rounded-2xl bg-purple-500/10 blur-xl"
            animate={{ y: `calc(${activeIndex} * 3.4rem)` }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          />

          <div className="relative z-10 space-y-2.5 pt-1">
            {FAQ_DATA.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <motion.button
                  key={item.question}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "group relative flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-400",
                    "bg-slate-950/60 backdrop-blur",
                    isActive
                      ? "border-purple-500/80 shadow-[0_0_0_1px_rgba(168,85,247,0.4),0_20px_60px_rgba(15,23,42,0.9)]"
                      : "border-slate-700/70 hover:border-purple-400/50 hover:bg-slate-900/80",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-400",
                      isActive
                        ? "bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(192,38,211,0.25),transparent_60%)] opacity-100"
                        : "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.2),transparent_60%)] group-hover:opacity-80",
                    ].join(" ")}
                  />

                  <div className="relative flex flex-1 items-center gap-3">
                    <motion.div
                      layout
                      className={[
                        "flex h-8 w-8 flex-none items-center justify-center rounded-full border text-[0.7rem] font-semibold",
                        isActive
                          ? "border-purple-400 bg-slate-950 text-purple-100"
                          : "border-slate-600/80 bg-slate-950/80 text-slate-300/90 group-hover:border-purple-500",
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    <div className="flex flex-col">
                      <span
                        className={[
                          "text-[0.7rem] font-medium uppercase tracking-[0.22em]",
                          isActive
                            ? "text-purple-300"
                            : "text-slate-400 group-hover:text-purple-200/90",
                        ].join(" ")}
                      >
                        {item.tag}
                      </span>
                      <span
                        className={[
                          "mt-0.5 text-sm sm:text-base",
                          isActive
                            ? "text-slate-50"
                            : "text-slate-200/90 group-hover:text-slate-50",
                        ].join(" ")}
                      >
                        {item.question}
                      </span>
                    </div>
                  </div>

                  <motion.span
                    animate={{ rotate: isActive ? 90 : 0, scale: isActive ? 1.08 : 1 }}
                    className={[
                      "relative ml-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border text-[0.7rem] transition-colors",
                      isActive
                        ? "border-purple-500/60 bg-purple-500/20 text-purple-100"
                        : "border-slate-600/60 bg-slate-950/80 text-slate-100/80",
                    ].join(" ")}
                  >
                    <span className="-mt-[1px]">›</span>
                  </motion.span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Right panel */}
        <motion.div
          className="relative mt-2 overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/70 px-7 py-7 text-sm text-slate-200/95 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_26px_70px_rgba(15,23,42,0.85)] backdrop-blur"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-purple-400">
                {activeItem.tag}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-50 sm:text-xl">
                {activeItem.question}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300/95">
                {activeItem.answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
