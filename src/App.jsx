import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import {DomainsSection} from "./components/domain";
import Timeline from "./components/timeline";
import RewardsSection from "./components/reward";
import SponsorsSection from "./components/sponsor";
import Footer from "./components/footer";
import {FAQ} from "./components/FAQ";
import StarBackground from "./components/starbackground";
import Rules from "./components/rules";
import Loadingscreen from "./components/loadingscreen";
import FAQSection from "./components/FAQ1.tsx"

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start fade-out
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 4000);

    // Remove intro completely
    const swapTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4800);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(swapTimer);
    };
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {/* 🔥 LOADING SCREEN */}
        {showIntro && (
          <div
            className={`transition-wrapper ${
              isTransitioning ? "fade-exit-active" : ""
            }`}
          >
            <Loadingscreen />
          </div>
        )}

        {/* 🔥 MAIN SITE */}
        {!showIntro && (
          <div key="site">
            <StarBackground />

            {/* Optional Aurora */}
            {/*
            <div className="aurora-bg">
              <Aurora
                colorStops={["#0f0c29", "#302b63", "#a855f7", "#7c3aed"]}
              />
            </div>
            */}

            <Navbar />
            <Hero />
            <About />
            <DomainsSection />
            {/* <Timeline /> */}
            <RewardsSection />
            <Rules />
            <SponsorsSection />
            <FAQSection />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
