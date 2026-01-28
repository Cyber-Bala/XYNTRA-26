import React, { useState, useEffect, useRef, useMemo } from 'react';
import './timeline.css';

const ITINERARY = [
  // DAY 01
  { id: 1, day: 1, title: 'REGISTRATION', time: '07:30 AM', location: 'Indoor Auditorium', desc: 'Entry sequence for all operatives at the fndoor auditorium.', baseOrbit: 150, speed: 0.0004, offset: 0 },
  { id: 2, day: 1, title: 'INAUGURATION', time: '08:00 AM - 08:30 AM', location: 'Indoor Auditorium', desc: 'Official protocol activation and welcome ceremony.', baseOrbit: 175, speed: 0.00035, offset: 0.6 },
  { id: 3, day: 1, title: 'HACKATHON STARTS', time: '09:00 AM', desc: 'The countdown concludes. Main logic construction phase begins.', baseOrbit: 200, speed: 0.0003, offset: 1.2 },
  { id: 4, day: 1, title: 'TEA/COFFEE & SNACKS', time: '10:30 AM', desc: 'Energy replenishment cycle for sustained focus.', baseOrbit: 225, speed: 0.00025, offset: 1.8 },
  { id: 5, day: 1, title: 'LUNCH', time: '12:30 PM to 01:30 PM', desc: 'Global sustenance break and networking.', baseOrbit: 250, speed: 0.0002, offset: 2.4 },
  { id: 6, day: 1, title: 'MENTORING SESSION', time: '03:00 PM', desc: 'Strategic tactical advice from industry veterans.', baseOrbit: 275, speed: 0.00015, offset: 3.0 },
  { id: 7, day: 1, title: 'TEA/COFFEE & SNACKS', time: '04:30 PM', desc: 'Secondary energy boost for the evening push.', baseOrbit: 300, speed: 0.00012, offset: 3.6 },
  { id: 8, day: 1, title: 'DINNER', time: '07:30 PM to 08:30 PM', desc: 'Network cooling and high-protein refueling.', baseOrbit: 325, speed: 0.0001, offset: 4.2 },
  { id: 9, day: 1, title: 'MENTORING SESSION', time: '11:30 PM', desc: 'Late-night logic optimization and debug support.', baseOrbit: 350, speed: 0.00008, offset: 4.8 },

  // DAY 02
  { id: 10, day: 2, title: 'TEA/COFFEE', time: '12:00 AM', desc: 'Midnight maintenance cycle for night owls.', baseOrbit: 150, speed: 0.0004, offset: 0 },
  { id: 11, day: 2, title: 'TEA/COFFEE', time: '05:00 AM', desc: 'Dawn synchronization fuel to combat fatigue.', baseOrbit: 175, speed: 0.00035, offset: 0.6 },
  { id: 12, day: 2, title: 'BREAKFAST', time: '07:30 AM to 08:30 AM', desc: 'Re-initializing systems for the final evaluation sprint.', baseOrbit: 200, speed: 0.0003, offset: 1.2 },
  { id: 13, day: 2, title: 'TEA/COFFEE & SNACKS', time: '10:30 AM', desc: 'Final push preparation. Clean up the repo.', baseOrbit: 225, speed: 0.00025, offset: 1.8 },
  { id: 14, day: 2, title: 'FIRST EVALUATION', time: '11:00 AM', desc: 'Initial code quality and functionality analysis.', baseOrbit: 250, speed: 0.0002, offset: 2.4 },
  { id: 15, day: 2, title: 'LUNCH', time: '12:30 PM to 01:30 PM', desc: 'The last mid-day recharge of the event.', baseOrbit: 275, speed: 0.00015, offset: 3.0 },
  { id: 16, day: 2, title: 'FINAL EVALUATION', time: '04:30 PM', desc: 'Ultimate logic validation and demo sequence.', baseOrbit: 300, speed: 0.00012, offset: 3.6 },
  { id: 17, day: 2, title: 'TEA/COFFEE', time: '05:00 PM', desc: 'Cooling systems active. Relax, it is done.', baseOrbit: 325, speed: 0.0001, offset: 4.2 },
  { id: 18, day: 2, title: 'VALEDICTORY', time: '06:00 PM', desc: 'Celebrating the architects and the winners.', baseOrbit: 350, speed: 0.00008, offset: 4.8 },
  { id: 19, day: 2, title: 'CAMPUS DEPARTURE', time: '06:30 PM', desc: 'Buses leaves the campus. Operation complete.', baseOrbit: 375, speed: 0.00006, offset: 5.4 },
];
const Timeline = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [activeId, setActiveId] = useState(null);
  const wrapperRef = useRef(null);
  const nodeRefs = useRef({});
  const laserRefs = useRef({});
  const polylineGlowRef = useRef(null);
  const polylineCoreRef = useRef(null);
  const requestRef = useRef(null);
  const rotationRef = useRef(0);
  const scrollProgressRef = useRef(0);

  const currentStages = useMemo(() => ITINERARY.filter(s => s.day === selectedDay), [selectedDay]);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);
      scrollProgressRef.current = progress;

      const stageIndex = Math.floor(progress * currentStages.length);
      const safeIndex = Math.min(stageIndex, currentStages.length - 1);
      
      if (progress > 0.02 && progress < 0.98) {
        setActiveId(currentStages[safeIndex].id);
      } else {
        setActiveId(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStages]);

  const animate = () => {
    rotationRef.current += 0.5 + (scrollProgressRef.current * 1.5);
    const points = [];

    currentStages.forEach((stage) => {
      const node = nodeRefs.current[stage.id];
      const coreLaser = laserRefs.current[stage.id];
      
      if (node) {
        const angle = (rotationRef.current * stage.speed) + stage.offset;
        const x = Math.cos(angle) * stage.baseOrbit;
        const y = Math.sin(angle) * (stage.baseOrbit * 0.5);
        
        points.push(`${x},${y}`);
        node.style.transform = `translate(${x}px, ${y}px)`;
        
        if (coreLaser) {
          coreLaser.setAttribute('x2', x.toString());
          coreLaser.setAttribute('y2', y.toString());
        }
      }
    });

    const pointsStr = points.join(' ');
    if (polylineGlowRef.current) polylineGlowRef.current.setAttribute('points', pointsStr);
    if (polylineCoreRef.current) polylineCoreRef.current.setAttribute('points', pointsStr);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [currentStages]);

  return (
    <div id='timeline' className="timeline-wrapper" ref={wrapperRef}>
      <div className="sticky-timeline-container">
        <div className="timeline-ui-container">
          <div className="timeline-header">
          <div className="timeline-title-group">
            <h2 className="timeline-title-main">
            OPERATIONS<br /><span style={{ color: 'var(--accent-purple)' }}>TIMELINE</span>
            </h2>
            <p className="timeline-subtitle-sync">
              Phase Sync Protocol v4.2
            </p>
          </div>

            <div className="day-switcher">
              {[1, 2].map((day) => (
                <button 
                  key={day} 
                  onClick={() => setSelectedDay(day)} 
                  className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                >
                  DAY 0{day}
                </button>
              ))}
            </div>
          </div>
          
          {/* <div className="status-hud"> */}
          {/* <div className="hud-row">
            <span className="hud-label-mono">TEMPORAL_SECTOR</span>
            <span className="hud-tag">0{selectedDay}</span>
          </div>

          <div className="status-list">
            <p className="status-item"><span>Singularities Locked:</span> <span className="status-val">{currentStages.length}</span></p>
            <p className="status-item"><span>Atmospheric Drag:</span> <span className="status-val">NULL</span></p>
            <p className="status-item"><span>Logic Intensity:</span> <span className="status-val">98.4%</span></p>
            <p className="status-item"><span>Status:</span> <span className="status-ok">Optimal</span></p>
          </div> */}

          {/* <div className="progress-container">
            <div className="progress-header">
              <span>PROGRESS</span>
              <span>{selectedDay === 1 ? '45%' : '92%'}</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: selectedDay === 1 ? '45%' : '92%' }}
              />
            </div>
          </div> */}
        {/* </div> */}
      </div>


        <div className="orbital-viewport">
          <div className="central-core-anchor">
            <div className="core-sphere">
               <div className="core-brand-xyntra">XYNTRA</div>
            </div>
          </div>
          
          <svg className="lasers-svg" viewBox="-600 -400 1200 800" preserveAspectRatio="xMidYMid meet">
            <polyline ref={polylineGlowRef} className="event-stream-glow" fill="none" stroke="var(--accent-cyan)" strokeWidth="4" opacity="0.3" />
            <polyline ref={polylineCoreRef} className="event-stream-core" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
            {currentStages.map((stage) => (
              <line 
                key={`laser-${stage.id}`} 
                ref={(el) => { laserRefs.current[stage.id] = el; }} 
                x1="0" y1="0" x2="0" y2="0" 
                stroke={activeId === stage.id ? "rgba(168, 85, 247, 0.8)" : "rgba(168, 85, 247, 0.08)"} 
                strokeWidth={activeId === stage.id ? "2.5" : "0.5"} 
              />
            ))}
          </svg>
          {/* Orbit Paths */}
        {currentStages.map(stage => (
          <div
            key={`orbit-line-${stage.id}`}
            className="orbit-line"
            style={{
              width: stage.baseOrbit * 2,
              height: stage.baseOrbit * 2 * 0.5,
              opacity: 1.1 - (stage.id * 0.04)
            }}
          />
        ))}

          {currentStages.map((stage) => (
            <div 
              key={stage.id} 
              ref={(el) => { nodeRefs.current[stage.id] = el; }} 
              className="node-anchor"
            >
              <div className="node-interactive-point">
                <div className={`node-dot ${activeId === stage.id ? 'active' : ''}`}>
                   <span className="node-num">{stage.id}</span>
                </div>
                {activeId === stage.id && (
                  <div className="data-singularity-card">
                  <div className="card-scan-line" />

                  <div className="card-header">
                    <div style={{ flex: 1 }}>
                      <div className="card-id-label">
                        S0{selectedDay} // NODE_{stage.id}
                      </div>
                      <h4 className="card-title">{stage.title}</h4>

                      {stage.location && (
                        <div className="card-location">
                          <span className="location-dot" />
                          {stage.location}
                        </div>
                      )}
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div className="card-time-badge">{stage.time}</div>
                    </div>
                  </div>

                  <p className="card-description">{stage.desc}</p>

                  <div className="card-footer">
                    <div className="footer-sync-status">
                      <div className="status-bars">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="status-bar" />
                        ))}
                      </div>
                      <span>SYNC_STABLE</span>
                    </div>
                    <span>REF_{stage.id * 732}</span>
                  </div>
                </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;  