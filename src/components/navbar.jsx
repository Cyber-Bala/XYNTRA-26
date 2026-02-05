  import React, { useState, useEffect } from 'react';
  import { motion, useScroll } from 'framer-motion';
  import reclogo from "../assets/college.png";
  import ieeelogo from "../assets/ieee_cs.png";
  import './navbar.css';

  const Navbar = () => {
    const { scrollY } = useScroll();
    const [hasScrolled, setHasScrolled] = useState(false);

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

    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar ${hasScrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__container">
          <a href="/" className="navbar__logo-group">
            {/* <div className="navbar__logo-icon">X</div> */}
            {/* <span className="navbar__logo-text">XYNTRA</span> */}
            <img src={reclogo} alt="reclogo" className='rec-logo'/>
            <img src={ieeelogo} alt="reclogo" className='ieee-logo'/>
          </a>

          <div className="navbar__links-desktop">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="navbar__link">
                {item.name}
              </a>
            ))}
            {/* <button className="navbar__cta">Register Now</button> */}
          </div>

          <button className="navbar__mobile-toggle">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </motion.nav>
    );
  };

  export default Navbar;
