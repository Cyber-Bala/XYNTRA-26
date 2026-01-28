import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DEFAULT_GLOW_COLOR = "124, 58, 237";
const DEFAULT_RADIUS = 300;

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const x = ((mouseX - rect.left) / rect.width) * 100;
  const y = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${x}%`);
  card.style.setProperty("--glow-y", `${y}%`);
  card.style.setProperty("--glow-intensity", glow);
  card.style.setProperty("--glow-radius", `${radius}px`);
};

export default function MouseGlow({
  containerRef,
  glowColor = DEFAULT_GLOW_COLOR,
  radius = DEFAULT_RADIUS
}) {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const spotlight = document.createElement("div");
    spotlight.style.cssText = `
      position: fixed;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15),
        rgba(${glowColor}, 0.05),
        transparent 70%
      );
      transform: translate(-50%, -50%);
      z-index: 100;
      opacity: 0;
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      const cards = containerRef.current.querySelectorAll(".glow-card");
      const { proximity, fadeDistance } = calculateSpotlightValues(radius);

      let minDistance = Infinity;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const d =
          Math.hypot(e.clientX - cx, e.clientY - cy) -
          Math.max(rect.width, rect.height) / 2;

        const dist = Math.max(0, d);
        minDistance = Math.min(minDistance, dist);

        let glow = 0;
        if (dist <= proximity) glow = 1;
        else if (dist <= fadeDistance)
          glow = (fadeDistance - dist) / (fadeDistance - proximity);

        updateCardGlowProperties(card, e.clientX, e.clientY, glow, radius);
      });

      gsap.to(spotlight, {
        x: e.clientX,
        y: e.clientY,
        opacity: minDistance < fadeDistance ? 1 : 0,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      spotlight.remove();
    };
  }, [containerRef, glowColor, radius]);

  return null;
}
