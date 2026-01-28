import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Users, Globe, Rocket } from 'lucide-react';
import './about.css';

/* 🔢 Counter Component */
const AnimatedCounter = ({ value, suffix = '' }) => {
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
    <div ref={ref} className="stat">
      <div className="stat__value">
        {count}{suffix}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const cards = [
    { icon: <Zap className="icon-purple" />, title: 'Innovation', desc: 'Pushing the boundaries of what is possible with code.' },
    { icon: <Users className="icon-violet" />, title: 'Collaboration', desc: 'Work with the brightest minds across the country.' },
    { icon: <Globe className="icon-indigo" />, title: 'Impact', desc: 'Solving real-world problems with scalable solutions.' },
    { icon: <Rocket className="icon-white" />, title: 'Launch', desc: 'Get incubation support for winning prototypes.' },
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about__grid">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about__intro"
          >
            <h2 className="about__subtitle">The Flagship Experience</h2>

            <h3 className="about__title">
              Where Visionaries <br />
              <span className="text-gradient">Architect Tomorrow</span>
            </h3>

            <p className="about__text">
              IEEE XYNTRA is more than just a hackathon; it's a global stage for technical brilliance.
              Over 36 hours, you'll prototype, iterate, and pitch to industry veterans.
            </p>

            <div className="about__divider" />

            {/* 🔥 ANIMATED STATS */}
            <div className="about__stats">
              <div>
                <AnimatedCounter value={36} suffix=" HRS" />
                <div className="stat__label">Hackathon Duration</div>
              </div>

              <div>
                <AnimatedCounter value={28} suffix="K" />
                <div className="stat__label">Prize Pool</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="about__cards">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="about-card glass"
              >
                <div className="about-card__icon-wrapper">
                  {card.icon}
                </div>
                <h4 className="about-card__title">{card.title}</h4>
                <p className="about-card__desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
