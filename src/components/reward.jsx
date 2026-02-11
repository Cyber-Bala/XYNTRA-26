import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Crown, Gem, Target, Cpu } from 'lucide-react';
import './reward.css';
// import RewardsSection from './RewardsSection';

const prizesData = [
  {
    id: 'RWD-01',
    rank: 'GRAND WINNER',
    prize: '₹50,000',
    title: "The Apex Predator",
    desc: "Dominance asserted. The ultimate champion of the Xyntra hackathon.",
    details: ['Winner\'s Trophy', 'Gold Medal', 'Exclusive NFT', 'Dev Kit'],
    color: '#FFD700', // Gold
    icon: Crown,
    accent: 'gold'
  },
  {
    id: 'RWD-02',
    rank: 'RUNNER UP',
    prize: '₹30,000',
    title: "The Silver Strategist",
    desc: "Excellence in execution. A force to be reckoned with.",
    details: ['Runner-up Trophy', 'Silver Medal', 'Premium Swag', 'Cloud Credits'],
    color: '#C0C0C0', // Silver
    icon: Gem,
    accent: 'silver'
  },
  {
    id: 'RWD-03',
    rank: 'SECOND RUNNER UP',
    prize: '₹20,000',
    title: "The Bronze Architect",
    desc: "Innovation foundation. Building the future, one block at a time.",
    details: ['Bronze Medal', 'Standard Swag', 'Tech Vouchers'],
    color: '#CD7F32', // Bronze
    icon: Target,
    accent: 'bronze'
  }
];

const PrizeCard = ({ prize }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      className="prize-card-wrapper"
      onMouseMove={handleMouseMove}
    >
      <div className={`prize-card glass-panel ${prize.accent}`}>
        {/* Holographic Border Effect */}
        <motion.div className="holographic-border" style={style} />

        {/* Card Content */}
        <div className="card-header">
          <div className="card-id-badge">
            <Cpu size={14} />
            <span>{prize.id}</span>
          </div>
          <div className="card-rank-badge" style={{ borderColor: prize.color, color: prize.color }}>
            {prize.rank}
          </div>
        </div>

        <div className="card-visual">
          <div className="icon-container" style={{ boxShadow: `0 0 40px ${prize.color}40` }}>
            <prize.icon size={64} color={prize.color} strokeWidth={1.5} />
            <motion.div
              className="icon-ring"
              style={{ borderColor: prize.color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="visual-scanline" />
        </div>

        <div className="card-info">
          <h3 className="prize-title">{prize.title}</h3>
          <div className="prize-amount" style={{ textShadow: `0 0 20px ${prize.color}` }}>
            {prize.prize}
          </div>
          <p className="prize-desc">{prize.desc}</p>

          <div className="prize-details-list">
            {prize.details.map((detail, idx) => (
              <div key={idx} className="detail-item">
                <Target size={12} className="detail-bullet" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Corners */}
        <div className="corner-decor top-left" />
        <div className="corner-decor top-right" />
        <div className="corner-decor bottom-left" />
        <div className="corner-decor bottom-right" />
      </div>
    </div>
  );
};

const RewardsSection = () => {
  return (
    <div className="prizes-section-container" id="rewards">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="header-content"
        >
          <div className="system-status">
            <span className="status-dot"></span>
            REWARD_VAULT_ELEVATED_PRIVILEGES_REQUIRED
          </div>
          <h2 className="section-title">CHAMPION'S <span className="highlight">VAULT</span></h2>
          <div className="header-decoration-line"></div>
        </motion.div>
      </div>

      <motion.div
        className="cards-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {prizesData.map((prize) => (
          <PrizeCard key={prize.id} prize={prize} />
        ))}
      </motion.div>

      {/* Background Elements */}
      <div className="bg-grid-floor"></div>
      <div className="ambient-glow"></div>
    </div>
  );
};

export default RewardsSection;
