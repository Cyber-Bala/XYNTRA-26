import React from 'react';
import { motion } from 'framer-motion';
import './sponsor.css';

const PARTNERS = {
  row1: [
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1024px-Google_Cloud_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png' },
    { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1024px-Stripe_Logo%2C_revised_2016.svg.png' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png' },
    { name: 'DigitalOcean', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1024px-DigitalOcean_logo.svg.png' },
  ],
  row2: [
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Auth0', logo: 'https://www.vectorlogo.zone/logos/auth0/auth0-icon.svg' },
    { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Twilio', logo: 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg' },
    { name: 'MongoDB', logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
    // { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%2C_light_blue%29.svg/1024px-Intel_logo_%282020%2C_light_blue%29.svg.png' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1024px-Nvidia_logo.svg.png' },
  ],
};

const MarqueeTrack = ({ items, direction = -1, speed = 25, tier }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-track"
        animate={{ x: direction === -1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((partner, i) => (
          <SponsorCard key={`${tier}-${i}`} partner={partner} tier={tier} />
        ))}
      </motion.div>
    </div>
  );
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="sponsors">
      <div className="sponsors__header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sponsors__badge"
        >
          ECOSYSTEM
        </motion.div>

        <h2 className="sponsors__title">
          COMMUNITY <span className="text-gradient">PARTNERS</span>
        </h2>
      </div>

      <div className="sponsors__marquee-wrapper">
        <div className="sponsors__mask left" />
        <div className="sponsors__mask right" />

        {/* Row 1: Primary Sponsors */}
        <MarqueeTrack items={PARTNERS.row1} speed={40} tier="premium" />

        {/* Row 2: Secondary Sponsors */}
        <MarqueeTrack items={PARTNERS.row2} direction={1} speed={35} tier="standard" />
      </div>

      <div className="sponsors__grid-bg" />
    </section>
  );
};

const SponsorCard = ({ partner, tier }) => {
  return (
    <div className={`sponsor-card sponsor-card--${tier}`}>
      <div className="sponsor-card__inner">
        <img
          src={partner.logo}
          alt={partner.name}
          className="sponsor-card__logo"
        />
      </div>
      <div className="sponsor-card__glow" />
    </div>
  );
};

export default SponsorsSection;
