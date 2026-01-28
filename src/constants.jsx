import React from 'react';
import { Shield, Brain, CreditCard, GraduationCap, Lightbulb } from 'lucide-react';
import healthImg  from './assets/XYNTRA_HEALTH_ASSET.jpg'
import edtechImg  from './assets/XYNTRA_EDTECH_ASSET.jpg'
import openImg  from './assets/XYNTRA_OPEN_ASSET.jpg'
import defenceImg  from './assets/XYNTRA_DEFENCE_ASSET.jpg'
import fintechImg  from './assets/XYNTRA_FINTECH_ASSET.jpg'

/* DOMAINS */
export const DOMAINS = [
    {
      id: 'defence',
      title: 'Defence Technology',
      description: 'Innovating advanced systems for national security, surveillance, communication, and strategic defense.',
      icon: 'shield',
      tag: '#DEFENCE',
      image: defenceImg
    },
    {
        id: 'fintech',
        title: 'FinTech & Blockchain',
        description: 'Building secure financial systems, decentralized platforms, and next-generation digital payment solutions.',
        icon: 'credit-card',
        tag: '#FINTECH',
        image: fintechImg
  },
  {
    id: 'edtech',
    title: 'EdTech Solutions',
    description: 'Redefining the classroom experience with immersive and adaptive learning.',
    icon: 'graduation-cap',
    tag: '#EDTECH',
    image: edtechImg
  },
    {
    id: 'health',
    title: 'Health Innovation',
    description: 'Transforming patient outcomes through data-driven medical breakthroughs.',
    icon: 'brain',
    tag: '#HEALTH',
    image: healthImg
  },
{
  id: 'open',
  title: 'Open Innovation',
  description: 'Solve any challenge that pushes the boundaries of creativity.',
  icon: 'lightbulb',
  tag: '#OPEN',
  image: openImg
}
];

/* TIMELINE */
export const TIMELINE = [
  // DAY 1
  { id: 1, day: 1, time: '7:30 AM', title: 'Registration', description: '@ Indoor Auditorium' },
  { id: 2, day: 1, time: '8:00 AM - 8:30 AM', title: 'Inauguration', description: '@ Indoor Auditorium' },
  { id: 3, day: 1, time: '9:00 AM', title: 'Hackathon Starts', description: 'Development begins' },
  { id: 4, day: 1, time: '10:30 AM', title: 'Tea/Coffee & Snacks', description: 'Morning Refreshments' },
  { id: 5, day: 1, time: '12:30 PM to 1:30 PM', title: 'Lunch', description: 'Mid-day Break' },
  { id: 6, day: 1, time: '3:00 PM', title: 'Mentoring Session', description: 'Expert guidance rounds' },
  { id: 7, day: 1, time: '4:30 PM', title: 'Tea/Coffee & Snacks', description: 'Evening Refreshments' },
  { id: 8, day: 1, time: '7:30 PM to 8:30 PM', title: 'Dinner', description: 'Refuel and Recharge' },
  { id: 9, day: 1, time: '11:30 PM', title: 'Mentoring Session', description: 'Late-night support' },

  // DAY 2
  { id: 10, day: 2, time: '12:00 AM', title: 'Tea/Coffee', description: 'Midnight boost' },
  { id: 11, day: 2, time: '05:00 AM', title: 'Tea/Coffee', description: 'Early bird refresh' },
  { id: 12, day: 2, time: '7:30 AM to 8:30 AM', title: 'Breakfast', description: 'Morning Fuel' },
  { id: 13, day: 2, time: '10:30 AM', title: 'Tea/Coffee & Snacks', description: 'Final stretch fuel' },
  { id: 14, day: 2, time: '11:00 AM', title: 'First Evaluation', description: 'Primary judging round' },
  { id: 15, day: 2, time: '12:30 PM to 1:30 PM', title: 'Lunch', description: 'Power lunch' },
  { id: 16, day: 2, time: '4:30 PM', title: 'Final Evaluation', description: 'Presentation to jury' },
  { id: 17, day: 2, time: '5:00 PM', title: 'Tea/Coffee', description: 'Evening break' },
  { id: 18, day: 2, time: '6:00 PM', title: 'Valedictory', description: 'Awards & Ceremony' },
  { id: 19, day: 2, time: '6:30 PM', title: 'Buses Leave', description: 'End of Event' },
];

/* PRIZES */
export const PRIZES = [
  {
    position: '2nd Runner Up',
    reward: '₹8,000',
    perks: ['Bronze Trophy'],
    gradient: 'from-[#0B0B0F] to-[#6366F1]/20',
  },
  {
    position: 'Grand Winner',
    reward: '₹15,000',
    perks: ['Gold Trophy'],
    gradient: 'from-[#7C3AED]/20 to-[#8B5CF6]/40',
  },
  {
    position: '1st Runner Up',
    reward: '₹5,000',
    perks: ['Silver Trophy'],
    gradient: 'from-[#0B0B0F] to-[#8B5CF6]/20',
  },
];
