import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aurora from "./components/Aurora";
import About from "./components/about";
import DomainsSection from "./components/domain";
import Timeline from "./components/timeline";
import RewardsSection from "./components/reward";
import SponsorsSection from "./components/sponsor";
import Footer from "./components/footer";
import FAQ from "./components/FAQ";
import StarBackground from "./components/starbackground";
import Rules from "./components/rules";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {/* 🔥 LOADING SCREEN */}
        {loading && (
          <Loading
            key="loading"
            onComplete={() => setLoading(false)}
          />
        )}

        {/* 🔥 MAIN SITE */}
        {!loading && (
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
            <Timeline />
            <RewardsSection />
            <Rules />
            <SponsorsSection />
            <FAQ />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
