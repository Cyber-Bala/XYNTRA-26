import { motion } from "framer-motion";
import "./loading.css"; // reuse existing robot styles

export default function RobotCore({ size = 1 }) {
  return (
    <motion.div
      layoutId="xyntra-robot"
      style={{ scale: size }}
      className="robot-diagnostics"
      animate={{
        scale: [size, size * 1.05, size],
        filter: ["hue-rotate(0deg)", "hue-rotate(10deg)", "hue-rotate(0deg)"]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <div className="hud-ring ring-1" />
      <div className="hud-ring ring-2" />

      <div className="robot-head">
        <div className="robot-face">
          <div className="robot-eyes">
            <motion.div
              className="robot-eye"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.div
              className="robot-eye"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
            />
          </div>
          <div className="robot-mouth" />
          <motion.div
            className="robot-scanline"
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
