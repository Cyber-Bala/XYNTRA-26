import React, { useEffect, useRef, useState } from 'react';
import { PRIZES } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import './reward.css';

gsap.registerPlugin(ScrollTrigger);

const RewardsSection = () => {
  const titleEmojis = ['✨', '🚀', '💎', '🔥'];
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    let cleanupFunctions = [];
    let timeoutId = null;

    // Initialize Three.js Scene for background
    const initThreeScene = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      
      // Wait for canvas to have proper dimensions
      if (canvas.clientWidth === 0 || canvas.clientHeight === 0) {
        console.warn('Canvas has no dimensions, waiting...');
        timeoutId = setTimeout(initThreeScene, 100);
        return;
      }

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true,
        antialias: true,
        precision: 'highp'
      });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setClearColor(0x000000, 0);
      renderer.pixelRatio = Math.min(window.devicePixelRatio, 2);

      // Create floating 3D cubes with gradient materials
      const createGeometry = () => {
        const geometries = [
          new THREE.BoxGeometry(2, 2, 2),
          new THREE.OctahedronGeometry(1.5),
          new THREE.IcosahedronGeometry(1.5),
          new THREE.TetrahedronGeometry(2)
        ];
        return geometries[Math.floor(Math.random() * geometries.length)];
      };

      const createMaterial = (color) => {
        return new THREE.MeshPhongMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: 0.3,
          wireframe: false,
          shininess: 100
        });
      };

      const colors = [0xa855f7, 0x8b5cf6, 0x7c3aed, 0x6d28d9];
      
      for (let i = 0; i < 8; i++) {
        const geometry = createGeometry();
        const material = createMaterial(colors[i % colors.length]);
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 50
        );

        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        mesh.velocity = {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3,
          z: (Math.random() - 0.5) * 0.3
        };

        scene.add(mesh);
        particlesRef.current.push(mesh);
      }

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(0xa855f7, 1.5, 100);
      pointLight1.position.set(30, 30, 30);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0x3b82f6, 1.5, 100);
      pointLight2.position.set(-30, -30, 30);
      scene.add(pointLight2);

      // Animation loop
      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Rotate and move particles
        particlesRef.current.forEach((mesh, i) => {
          mesh.rotation.x += mesh.velocity.x * 0.5;
          mesh.rotation.y += mesh.velocity.y * 0.5;
          mesh.rotation.z += mesh.velocity.z * 0.5;

          mesh.position.x += mesh.velocity.x;
          mesh.position.y += mesh.velocity.y;
          mesh.position.z += mesh.velocity.z;

          // Bounce back if out of bounds
          if (Math.abs(mesh.position.x) > 50) mesh.velocity.x *= -1;
          if (Math.abs(mesh.position.y) > 50) mesh.velocity.y *= -1;
          if (Math.abs(mesh.position.z) > 50) mesh.velocity.z *= -1;
        });

        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      const cleanup = () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        particlesRef.current.forEach(mesh => {
          mesh.geometry?.dispose();
          mesh.material?.dispose();
        });
        renderer.dispose();
      };
      
      cleanupFunctions.push(cleanup);
    };

    // Initialize GSAP animations
    const initGSAPAnimations = () => {
      const ctx = gsap.context(() => {
        // Animate floating emojis
        gsap.utils.toArray('.rewards__floating-emoji').forEach((emoji, i) => {
          gsap.to(emoji, {
            y: -15,
            duration: 3 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });

        // Title animation - START VISIBLE, no scroll trigger
        if (titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }

        // Desc animation - START VISIBLE, no scroll trigger
        if (descRef.current) {
          descRef.current.style.opacity = '1';
          descRef.current.style.transform = 'translateY(0)';
        }

        // Cards - START VISIBLE, no scroll trigger
        cardsRef.current.forEach(card => {
          if (card) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }
        });

        // Card icon rotation animation with enhanced effect
        gsap.utils.toArray('.prize-card__icon').forEach((icon, i) => {
          gsap.to(icon, {
            rotation: 360,
            duration: 4 + i * 0.5,
            repeat: -1,
            ease: 'none'
          });
        });

        // Enhanced floating animation for icons
        gsap.utils.toArray('.prize-card__icon').forEach((icon, i) => {
          gsap.to(icon, {
            y: -10,
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });

        // Champion badge pulse with glow
        const championBadge = document.querySelector('.prize-card__badge');
        if (championBadge) {
          gsap.to(championBadge, {
            scale: 1.15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });

          gsap.to(championBadge, {
            boxShadow: '0 4px 30px rgba(168, 85, 247, 0.8)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }

        // Hover animations for cards
        cardsRef.current.forEach((card) => {
          if (!card) return;

          const glowEl = card.querySelector('.prize-card__glow');
          const blurBg = card.querySelector('.prize-card__blur-bg');
          const icon = card.querySelector('.prize-card__icon');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -15,
              scale: 1.05,
              duration: 0.4,
              ease: 'power2.out'
            });

            if (glowEl) {
              gsap.to(glowEl, {
                opacity: 1,
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
              });
            }

            if (blurBg) {
              gsap.to(blurBg, {
                opacity: 1,
                duration: 0.4
              });
            }

            if (icon) {
              gsap.to(icon, {
                scale: 1.15,
                duration: 0.3
              });
            }

            // Perk items animate on hover
            gsap.to(card.querySelectorAll('.prize-card__perk-item'), {
              x: 8,
              duration: 0.3,
              stagger: 0.05,
              ease: 'power2.out'
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out'
            });

            if (glowEl) {
              gsap.to(glowEl, {
                opacity: 0,
                scale: 1,
                duration: 0.4
              });
            }

            if (blurBg) {
              gsap.to(blurBg, {
                opacity: 0,
                duration: 0.4
              });
            }

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                duration: 0.3
              });
            }

            gsap.to(card.querySelectorAll('.prize-card__perk-item'), {
              x: 0,
              duration: 0.3,
              stagger: 0.05,
              ease: 'power2.out'
            });
          });
        });

        // CTA animation - START VISIBLE
        if (ctaRef.current) {
          ctaRef.current.style.opacity = '1';
          ctaRef.current.style.transform = 'translateY(0)';

          // Pulse animation for CTA
          gsap.to(ctaRef.current, {
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }

        // Background glow animation
        gsap.to('.rewards__bg-glow', {
          y: 50,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });

        gsap.to('.rewards__bg-glow-secondary', {
          y: -50,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }, sectionRef);

      return () => ctx.revert();
    };

    initThreeScene();
    const cleanupGSAP = initGSAPAnimations();

    return () => {
      cleanupFunctions.forEach(fn => fn?.());
      if (timeoutId) clearTimeout(timeoutId);
      cleanupGSAP?.();
    };
  }, []);

  const positions = [1, 0, 2];
  const icons = ['🥉', '🏆', '🥈'];

  return (
    <section id="rewards" className="rewards" ref={sectionRef}>
      {/* Three.js Canvas for background */}
      <canvas 
        ref={canvasRef} 
        className="rewards__canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      
      <div className="rewards__bg-glow" />
      <div className="rewards__bg-glow-secondary" />

      <div className="section-container rewards__content">
        <div className="rewards__header">
          <div className="rewards__title-wrapper" ref={titleRef}>
            <div className="rewards__emoji-parade">
              {titleEmojis.map((emoji, i) => (
                <span key={i} className="rewards__floating-emoji">
                  {emoji}
                </span>
              ))}
            </div>
            <h2 className="rewards__title">ELITE REWARDS</h2>
            <div className="rewards__accent-line" />
          </div>

          <p className="rewards__desc" ref={descRef}>
            🏆 Claim your glory. Winners receive recognition, trophies & exclusive perks beyond the prize pool.
          </p>
        </div>

        <div className="rewards__grid">
          {PRIZES.map((prize, idx) => {
            const order = positions[idx];

            return (
              <div
                key={prize.position}
                ref={(el) => (cardsRef.current[order] = el)}
                className={`prize-card ${
                  idx === 1 ? 'prize-card--champion' : ''
                } prize-card--position-${order}`}
              >
                {/* Animated background blur */}
                <div className="prize-card__blur-bg" />

                {/* Top accent line */}
                <div className="prize-card__top-accent" />

                {/* Badge */}
                {idx === 1 && (
                  <div className="prize-card__badge">
                    ⭐ CHAMPION
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`prize-card__icon ${
                    idx === 1 ? 'prize-card__icon--champion' : ''
                  }`}
                >
                  {icons[idx]}
                </div>

                {/* Position Label */}
                <div className="prize-card__position-label">
                  {idx === 1 ? '🥇 #1' : idx === 0 ? '🏅 #3' : '🚩 #2'}
                </div>

                {/* Position Title */}
                <h3 className="prize-card__position">{prize.position}</h3>

                {/* Reward Amount */}
                <div className="prize-card__reward-wrapper">
                  <div className="prize-card__reward">{prize.reward}</div>
                  <span className="prize-card__currency">Prize Money</span>
                </div>

                {/* Divider */}
                <div className="prize-card__divider" />

                {/* Perks List */}
                <div className="prize-card__perks-list">
                  <div className="prize-card__perks-label">✨ Includes:</div>
                  {prize.perks.map((perk) => (
                    <div key={perk} className="prize-card__perk-item">
                      <span className="prize-card__perk-icon">🎁</span>
                      <span className="prize-card__perk-text">{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div className="prize-card__glow" />
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="rewards__cta" ref={ctaRef}>
          <p className="rewards__cta-text">🚀 Ready to compete and win? Join the challenge now!</p>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
