
import React, { useEffect, useState } from 'react';
import './IntroLoader.css';

const IntroLoader = ({ onComplete }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Total animation duration is around 4-5 seconds based on the CSS
        // zoom-in takes 3.5s + 0.5s delay = 4.0s
        // lumieres-moving takes 5s
        // We'll give it a bit of buffer
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out
        }, 4500);

        return () => clearTimeout(timer);
    }, [onComplete]);



    // Generate fur spans 1-31
    const furs = Array.from({ length: 31 }, (_, i) => (
        <span key={i} className={`fur-${31 - i}`}></span>
    ));

    // Generate lamp spans 1-28
    const lamps = Array.from({ length: 28 }, (_, i) => (
        <span key={i} className={`lamp-${i + 1}`}></span>
    ));

    return (
        <div id="intro-container" className={!visible ? 'fade-out' : ''}>
            <div className="netflixintro" data-letter="X">
                <div className="helper-1">
                    <div className="effect-brush">
                        {furs}
                    </div>
                    <div className="effect-lumieres">
                        {lamps}
                    </div>
                </div>
                <div className="helper-2">
                    <div className="effect-brush">
                        {furs}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroLoader;
