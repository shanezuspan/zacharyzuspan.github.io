import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Coursework from './pages/Coursework';
import Experience from './pages/Experience';
import Passions from './pages/Passions';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home key="home" />;
      case 'coursework': return <Coursework key="coursework" />;
      case 'experience': return <Experience key="experience" />;
      case 'passions': return <Passions key="passions" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 mt-6">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 py-3 text-center text-xs text-gray-500">
        <p>© 2025 Zachary Zuspan • Designed with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;