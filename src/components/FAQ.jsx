import React, { useState } from 'react';
import './FAQ.css';

const FAQ_DATA = [
  {
    question: "What exactly is IEEE XYNTRA?",
    answer:
      "IEEE XYNTRA is a 48-hour premium tech marathon designed to simulate future real-world challenges. It brings together elite developers, designers, and engineers to build innovative solutions across diverse technological domains."
  },
  {
    question: "Who is eligible to participate?",
    answer:
      "The event is open to all university students who are passionate about technology. Whether you're a beginner or an expert, if you have the drive to build something groundbreaking, you're welcome."
  },
  {
    question: "What is the recommended team size?",
    answer:
      "Teams must consist of 2 to 4 members. We recommend forming a multidisciplinary team to ensure you have all the skills needed to build a complete prototype."
  },
  {
    question: "Are there any registration fees?",
    answer:
      "No, participation in IEEE XYNTRA is completely free for all selected teams. We provide food, swag, and the infrastructure needed to hack comfortably."
  },
  {
    question: "What should I bring to the event?",
    answer:
      "Bring your laptop, chargers, any specific hardware you might need for your project, and your enthusiasm. We'll handle the rest, including workspace and refreshments."
  },
  {
    question: "How will the projects be evaluated?",
    answer:
      "Projects are judged based on innovation, technical complexity, design, and impact. We have a panel of industry veterans who will evaluate each submission during the final presentation phase."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">FAQ</h2>
          <div className="title-glow-bar" />
        </div>

        <div className="faq-grid">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`faq-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question-wrap">
                <h3 className="faq-question">{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>

              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.answer}</p>
              </div>

              <div className="faq-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
