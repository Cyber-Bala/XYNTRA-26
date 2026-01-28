import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./about.css";

/* ================= COUNTER COMPONENT ================= */
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 3200;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="n-value">
      {count}
      {suffix}
    </span>
  );
};

/* ================= ABOUT SECTION ================= */
const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  const title = "XYNTRA 2026";

  return (
    <section className="about-sticky-wrapper" ref={containerRef}>
      <motion.div style={{ scale, opacity }} className="about-sticky-content">
        {/* Background Grid */}
        <div className="grid-overlay" />

        <div className="about__layout">
          {/* ================= VISUAL ================= */}
          <div className="about__visual">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="vertical-line"
            />

            <div className="scrolling-numbers">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -100] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                    delay: i * 0.4,
                  }}
                >
                  010110
                </motion.span>
              ))}
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="about__main">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="about__tag"
            >
              // SYSTEM_INIT
            </motion.div>

            <h2 className="about__hero-title">
              {title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="about__description"
            >
              XYNTRA is a{" "}
              <span className="highlight">national-level offline hackathon</span>{" "}
              designed to foster{" "}
              <span className="highlight">
                innovation, collaboration,
              </span>{" "}
              and real-world problem solving among students. The event brings
              together teams to build impactful technology solutions within a
              limited time frame through intensive development, mentorship, and
              evaluation. The hackathon is conducted in an onsite format with
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ab? Hic perspiciatis laborum accusamus id corporis. Molestiae, tempora.
              continuous participation over a{" "}
              <span className="highlight">36-hour</span> period.
            </motion.p>

            {/* ================= STATS ================= */}
            <div className="about__footer-stats">
              <div className="neon-stat">
                <AnimatedCounter value={36} />
                <span className="n-label">Hours Onsite</span>
              </div>

              <div className="neon-stat">
                <AnimatedCounter value={100} suffix="+" />
                <span className="n-label">Participants</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
