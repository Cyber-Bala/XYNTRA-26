import React from 'react';
import { motion } from 'framer-motion';
import { PRIZES } from '../constants';
import { Trophy, CheckCircle2 } from 'lucide-react';
import './reward.css';

const RewardsSection = () => {
  return (
    <section id="rewards" className="rewards">
      <div className="rewards__bg-glow" />

      <div className="section-container rewards__content">
        <div className="rewards__header">
          <h2 className="rewards__title">
            REWARDS & <span className="text-gradient">PERKS</span>
          </h2>
          <p className="rewards__desc">
            Recognition for the best of the best. Beyond the prize pool, winners get global exposure.
          </p>
        </div>

        <div className="rewards__grid">
          {PRIZES.map((prize, idx) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`prize-card glass ${
                idx === 1 ? 'prize-card--featured' : ''
              } prize-card--${idx}`}
            >
              <div
                className={`prize-card__icon ${
                  idx === 1 ? 'prize-card__icon--featured' : ''
                }`}
              >
                <Trophy size={28} />
              </div>

              <h3 className="prize-card__position">{prize.position}</h3>
              <div className="prize-card__reward">{prize.reward}</div>

              <div className="prize-card__perks-list">
                {prize.perks.map((perk) => (
                  <div key={perk} className="prize-card__perk-item">
                    <CheckCircle2 size={16} className="prize-card__check" />
                    <span className="prize-card__perk-text">{perk}</span>
                  </div>
                ))}
              </div>

              {idx === 1 && (
                <div className="prize-card__badge">Featured</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
