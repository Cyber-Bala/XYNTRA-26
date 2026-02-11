import { useState, useEffect } from "react";

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
import FAQSection from "./components/FAQ1.tsx"
import IntroLoader from './components/IntroLoader';
import CinematicIntro from './components/CinematicIntro';

function App() {
  const [loading, setLoading] = useState(true);
  const [showCinematic, setShowCinematic] = useState(false);

  const handleLoaderComplete = () => {
    setLoading(false);
    setShowCinematic(true);
  };

  const handleCinematicComplete = () => {
    setShowCinematic(false);
  };

  return (
    <div className="app">
      {loading && <IntroLoader onComplete={handleLoaderComplete} />}
      {showCinematic && <CinematicIntro onComplete={handleCinematicComplete} />}

      {!loading && !showCinematic && (
        <>
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
          </>
        )}
    </div>
  );
}

export default App;
