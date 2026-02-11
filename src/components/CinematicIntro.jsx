import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CinematicIntro.css';

const CinematicIntro = ({ onComplete }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const starfieldRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            // Simple, elegant sequence (Total ~3.5s)

            // 0s: Init state
            gsap.set(containerRef.current, { opacity: 0 });
            gsap.set(textRef.current, { scale: 1.1, opacity: 0, filter: "blur(10px)" });

            // 0s-1.5s: Smooth Fade In of Space + Text
            tl.to(containerRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })
                .to(textRef.current, {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.5,
                    ease: "power2.out"
                }, "<0.2"); // Start slightly after bg fade

            // 1.5s-2.5s: Light sweep REMOVED for no-flash

            // 2.5s-3.5s: Transition to Hero (Zoom In + Fade Out)
            tl.to(textRef.current, {
                scale: 20, // Fly through effect
                opacity: 0,
                duration: 1.2,
                ease: "expo.in",
                transformOrigin: "center center"
            }, "+=1.0"); // Short hold

            tl.to(containerRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.in"
            }, "-=0.8"); // Overlap with zoom

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    // Helper to split text
    const splitText = (text) => text.split('').map((char, i) => (
        <span key={i} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
    ));

    return (
        <div ref={containerRef} className="cinematic-intro-container">
            {/* Starfield Background */}
            <div ref={starfieldRef} className="starfield" style={{ opacity: 0.6 }}>
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            <div className="content-center">
                <h1 ref={textRef} className="cinematic-title">
                    {splitText("XYNTRA '26")}
                    {/* <div className="light-sweep"></div> REMOVED */}
                    <div className="reflection">XYNTRA '26</div>
                </h1>
            </div>
        </div>
    );
};

export default CinematicIntro;
