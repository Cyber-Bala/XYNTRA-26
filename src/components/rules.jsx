import React from 'react';
import './rules.css'

const Icons = {
  Team: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),

  Conduct: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
    </svg>
  ),

  Timing: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.3" />
    </svg>
  ),

  Judging: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      <circle cx="12" cy="12" r="10" strokeOpacity="0.1" />
    </svg>
  ),

  FairPlay: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  ),

  Notes: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
};

const RULES_DATA = [
  {
    title: "Team Composition",
    icon: <Icons.Team />,
    rules: [
      "Teams can have 2-4 members",
      "Cross-college teams are allowed",
      "Each participant can be part of only one team"
    ]
  },
  {
    title: "Code of Conduct",
    icon: <Icons.Conduct />,
    rules: [
      "Plagiarism will lead to immediate disqualification",
      "Maintain professional behavior throughout",
      "Respect all participants and organizers"
    ]
  },
  {
    title: "Timing & Deadlines",
    icon: <Icons.Timing />,
    rules: [
      "All submissions must be on time",
      "Late entries will not be accepted",
      "Arrive 30 minutes before event start"
    ]
  },
  {
    title: "Judging Criteria",
    icon: <Icons.Judging />,
    rules: [
      "Innovation and creativity (30%)",
      "Technical implementation (40%)",
      "Design and User Experience (20%)",
      "Pitch and Presentation (10%)"
    ]
  },
  {
    title: "Fair Play",
    icon: <Icons.FairPlay />,
    rules: [
      "Pre-built projects are not allowed",
      "All code must be written during the event",
      "Usage of third-party APIs is permitted"
    ]
  },
  {
    title: "Important Notes",
    icon: <Icons.Notes />,
    rules: [
      "Bring your own laptops and equipment",
      "Stable internet will be provided",
      "Food and refreshments are on us!"
    ]
  }
];

const Rules = () => {
  return (
    <div className="rules-section" id='rules'>
      <div className="container">

        <div className="section-title-container">
          {/* <span className="rules-sup">OPERATIONAL_GUIDELINES</span> */}
          <h2 className="section-title">
            Rules <span style={{ color: '#7c3aed' }}>&</span> <span className="accent-glow">Regulations</span>
          </h2>
          <div className="title-glow-bar" />

          <div className="rules-status-line">
            <span className="status-blink-purple"></span>
            <span className="rules-status-text">
              // PROTOCOLS_LOADED... [COMPLIANCE_MANDATORY]
            </span>
          </div>
        </div>

        <div className="rules-grid">
          {RULES_DATA.map((item, index) => (
            <div
              key={index}
              className="rules-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rules-card-inner">
                <div className="rules-icon-wrap">
                  <div className="rules-icon-svg-container">
                    {item.icon}
                  </div>
                  <div className="icon-pulse-ring" />
                </div>

                <h3 className="rules-card-title">{item.title}</h3>

                <ul className="rules-list">
                  {item.rules.map((rule, idx) => (
                    <li key={idx}>
                      <span className="rule-bullet">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Elements */}
              <div className="card-edge-tl" />
              <div className="card-edge-br" />
              <div className="card-scan-beam" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Rules;
