import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import reclogo from "../assets/college.png";
import ieeelogo from "../assets/ieee_cs.png";
import './navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setHasScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    // { name: 'Timeline', href: '#timeline' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'Rules', href: '#rules' },
  ];
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 100; // Offset for navbar
    const duration = 1500; // Duration in ms (1.5 seconds)
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function: easeInOutQuart
      const ease = progress < 0.5
        ? 8 * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };



  return (
    <nav
      className={`navbar ${hasScrolled ? 'navbar--scrolled' : ''} navbar--anim`}
    >
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo-group" onClick={(e) => handleScroll(e, "#hero")}>
          {/* <div className="navbar__logo-icon">X</div> */}
          {/* <span className="navbar__logo-text">XYNTRA</span> */}
          <img src={reclogo} alt="reclogo" className='rec-logo' />
          <img src={ieeelogo} alt="reclogo" className='ieee-logo' />
        </a>

        <div className="navbar__links-desktop">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="navbar__link" onClick={(e) => handleScroll(e, item.href)}>
              {item.name}
            </a>
          ))}
          {/* <button className="navbar__cta">Register Now</button> */}
        </div>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>

          {/* Close button inside overlay (redundant but safe) */}
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="mobile-nav-link" onClick={(e) => {
                handleScroll(e, item.href);
                setIsMobileMenuOpen(false);
              }}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
