import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RewardOrb from "./RewardOrb";
import "./rewards.css";


gsap.registerPlugin(ScrollTrigger);

const rewards = [
  { title: "🏆 Winner Trophy", desc: "Exclusive XYNTRA Champion Trophy" },
  { title: "🎖 Certificates", desc: "Industry-recognized certificates" },
  { title: "💰 Cash Prizes", desc: "Attractive cash rewards" },
  { title: "🚀 Internship Offers", desc: "Top performers get hiring chances" }
];

export default function RewardsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: "#rewards",
        start: "top 70%",
      },
      y: 120,
      opacity: 0,
      rotateX: 30,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <section id="rewards" className="rewards-section">
      <div className="rewards-left">
        <h2>Rewards & Glory</h2>
        <p>Compete. Win. Get recognized.</p>

        <div className="reward-cards">
          {rewards.map((r, i) => (
            <div
              key={i}
              className="reward-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rewards-right">
        <RewardOrb />
      </div>
    </section>
  );
}
