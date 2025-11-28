import React from 'react';
import PageTransition from '../components/PageTransition';
import TicketCard from '../components/TicketCard';

const Passions = () => {
  return (
    <PageTransition>
      <h1 className="text-4xl text-park-deep-blue mb-6 flex items-center gap-3">
        <span>✨</span> Passions & Interests
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80" 
            alt="Theme Park Design" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-park-deep-blue/90 via-transparent to-transparent flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Themed Entertainment</h3>
            <p className="text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              Analyzing how immersive environments tell stories and create emotional connections with guests.
            </p>
          </div>
        </div>

        <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1563273941-86a0763264c7?auto=format&fit=crop&w=800&q=80" 
            alt="Sustainable Tourism" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-park-teal/90 via-transparent to-transparent flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Sustainable Tourism</h3>
            <p className="text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              Exploring how large-scale attractions can operate efficiently while effectively stewarding environmental resources.
            </p>
          </div>
        </div>
      </div>

      <TicketCard className="mt-8">
        <h3 className="text-2xl font-bold text-park-deep-blue mb-4">Why Hospitality?</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          I believe that the "magic" we feel in theme parks isn't just technology or intellectual property—it's the result of carefully orchestrated human interactions. My goal is to lead teams that deliver these moments of joy safely, efficiently, and consistently. Whether it's a family's first trip to a park or a return visit, I want to ensure every guest leaves with a memory they cherish.
        </p>
      </TicketCard>
    </PageTransition>
  );
};

export default Passions;