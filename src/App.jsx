import { useState } from "react"

import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Aurora from "./components/Aurora"
import About from "./components/about"
import DomainsSection from "./components/domain"
import Timeline from "./components/timeline"
import RewardsSection from "./components/reward"
import SponsorsSection from "./components/sponsor"
import Footer from "./components/footer"
import FAQ from "./components/FAQ"
import StarBackground from "./components/starbackground"
import LoadingScreen from "./components/loadingscreen"
import Rules from "./components/rules"

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="app">
      {/* 🔥 SHOW LOADER FIRST */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* 🔥 SHOW SITE AFTER LOADING */}
      {!loading && (
        <>
          <StarBackground />

          {/* <div className='aurora-bg'>
            <Aurora
              colorStops={["#0f0c29", "#302b63", "#a855f7", "#7c3aed"]}
            />
          </div> */}

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
        </>
      )}
    </div>
  )
}

export default App
