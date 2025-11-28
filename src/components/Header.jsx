import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: '🏠 Home', color: 'border-park-deep-blue' },
    { id: 'coursework', label: '📚 Coursework', color: 'border-park-magenta' },
    { id: 'experience', label: '🎟 Experience', color: 'border-park-teal' },
    { id: 'passions', label: '✨ Passions', color: 'border-park-yellow' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-hero-gradient shadow-lg text-white p-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-2xl shadow-inner">
            🎢
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl leading-none font-bold text-white drop-shadow-md">Zachary Zuspan</h1>
            <p className="text-xs md:text-sm text-white/90 font-medium tracking-wide uppercase">Hospitality • Theme Parks • Guest Experience</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                px-4 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-200 border-2
                ${activeTab === item.id 
                  ? 'bg-white text-park-deep-blue border-white shadow-lg scale-105' 
                  : 'bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white hover:-translate-y-0.5'}
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;