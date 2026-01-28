import React from "react"
import "./domain.css"
import { DiamondIcon } from "lucide-react";

const DomainIcons = {
  AI: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8a4 4 0 0 1 4 4" strokeOpacity="0.5" />
    </svg>
  ),
  Web3: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  HealthTech: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      <circle cx="12" cy="12" r="10" strokeOpacity="0.1" />
    </svg>
  ),
  Sustainable: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a7 7 0 0 1-7 7c0 1.1.9 2 2 2" />
      <path d="M7 20h2" />
      <path d="M11 20v2" />
    </svg>
  ),
  FinTech: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <path d="M9.5 10c0-1.5 1.5-2 2.5-2s2.5.5 2.5 2-1.5 2-2.5 2-2.5.5-2.5 2 1.5 2 2.5 2 2.5-.5 2.5-2" />
    </svg>
  ),
  Open: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      <path d="M12 12v.01" />
    </svg>
  )
};


const DOMAIN_DATA = [
  {
    id: "01",
    category: "MACHINE LEARNING & DEEP LEARNING",
    title: "Artificial Intelligence",
    desc: "Build intelligent systems that learn, adapt, and transform industries with cutting-edge AI and neural network solutions.",
    color: "#a855f7",
    icon: <DomainIcons.AI />
  },
  {
    id: "02",
    category: "DECENTRALIZED APPLICATIONS",
    title: "Web3 & Blockchain",
    desc: "Decentralize the future with smart contracts, DeFi protocols, and revolutionary blockchain applications.",
    color: "#0ea5e9",
    icon: <DomainIcons.Web3 />
  },
  {
    id: "03",
    category: "DIGITAL HEALTHCARE INNOVATION",
    title: "HealthTech",
    desc: "Revolutionize healthcare with AI diagnostics, telemedicine platforms, and life-saving medical technologies.",
    color: "#10b981",
    icon: <DomainIcons.HealthTech />
  },
  {
    id: "04",
    category: "GREEN INNOVATION & CLEANTECH",
    title: "Sustainable Tech",
    desc: "Create technology for a sustainable tomorrow with renewable energy solutions and eco-friendly innovations.",
    color: "#84cc16",
    icon: <DomainIcons.Sustainable />
  },
  {
    id: "05",
    category: "FINANCIAL TECHNOLOGY",
    title: "FinTech",
    desc: "Transform financial services with digital payments, algorithmic trading, and inclusive banking solutions.",
    color: "#f59e0b",
    icon: <DomainIcons.FinTech />
  },
  {
    id: "06",
    category: "BOUNDLESS CREATIVITY",
    title: "Open Innovation",
    desc: "Your wildest ideas welcome here. No boundaries, no limits — surprise us with your vision.",
    color: "#ec4899",
    icon: <DomainIcons.AI />
  }
]

const Domains = () => {
  return (
    <div id="domains" className="domains-section">
      <h1 className="domain-title">Domains</h1>
      <p className="title-line">Each domain is a challenge. Every challenge is an opportunity.</p>
      <div className="container">
        <div className="domains-grid">
          {DOMAIN_DATA.map(domain => (
            <div key={domain.id} className="domain-card-v3-container">
              <div className="domain-card-v3-inner">

                {/* FRONT FACE */}
                <div className="card-face card-front">
                  <div className="card-top-accent-wrap">
  <div
    className="card-top-accent"
    style={{
      background: `linear-gradient(90deg, ${domain.color}88, ${domain.color}22)`
    }}
  />
</div>

                  <div className="card-number-badge">{domain.id}</div>

                  <div className="card-body-v3">
                    <div
  className="domain-icon-box"
  style={{
    borderColor: `${domain.color}44`,
    color: domain.color   // 🔥 THIS LINE FIXES currentColor
  }}
>
                      <div
                        className="icon-inner-glow"
                        style={{ backgroundColor: `${domain.color}11` }}
                      />
                      {/* <span
                        className="icon-glyph-svg-wrap"
                        style={{ textShadow: `0 0 10px ${domain.color}88` }}
                      >
                        {domain.icon}
                      </span> */}
                       <div className="icon-glyph-svg-wrap" style={{ color: domain.color }}>
                        {domain.icon}
                      </div>
                      <div
                        className="icon-side-dot"
                        style={{ backgroundColor: domain.color }}
                      />
                    </div>

                    <div
                      className="domain-category"
                      style={{ color: domain.color }}
                    >
                      {domain.category}
                    </div>

                    <h3 className="domain-title-v3">{domain.title}</h3>
                    <p className="domain-desc-v3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic, quas alias a adipisci ex nemo dolor nobis cumque molestiae, quisquam ut! Consequuntur, porro vitae? Sunt esse perferendis praesentium in?</p>
                    <div className="hover-hint">HOVER FOR DETAILS</div>
                    <div className="card-scan-line" style={{ background: `linear-gradient(to right, transparent, ${domain.color}66, transparent)` }} />
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="card-face card-back">
                  <div className="card-top-accent-wrap">
  <div
    className="card-top-accent"
    style={{
      background: `linear-gradient(90deg, ${domain.color}88, ${domain.color}22)`
    }}
  />
</div>
                  <div className="card-body-v3 back-content">
                    <div className="back-header">
                      <div
                        className="domain-category"
                        style={{ color: domain.color, fontSize: "0.6rem" }}
                      >
                        {domain.category}
                      </div>
                      <h4
                        className="domain-title-v3"
                        style={{ fontSize: "1.2rem", marginBottom: "1rem" }}
                      >
                        {domain.title}
                      </h4>
                    </div>

                    <p className="domain-desc-v3">{domain.desc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quia quis alias ipsam. Laudantium esse, sed, corporis accusamus atque, quisquam dignissimos quasi sint voluptatem suscipit aliquid. Nulla corporis placeat perferendis.</p>

                    {/* <button
                      className="join-track-btn"
                      style={{ borderColor: domain.color, color: domain.color }}
                    >
                      INITIATE TRACK
                    </button> */}
                  </div>

                  <div
                    className="card-hover-glow"
                    style={{
                      background: `radial-gradient(circle at bottom right, ${domain.color}15, transparent 70%)`
                    }}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domains
