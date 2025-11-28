import React from 'react';
import PageTransition from '../components/PageTransition';
import TicketCard from '../components/TicketCard';

const Coursework = () => {
  return (
    <PageTransition>
      <h1 className="text-4xl text-park-deep-blue mb-6 flex items-center gap-3">
        <span>📚</span> Academic Adventures
      </h1>

      <TicketCard title="Payne Engagement Assignment">
        <p className="text-gray-600 mb-8 text-lg">
          Highlighting my involvement in the Payne School of Hospitality. This semester, I engaged with industry leaders to gain insights into the future of tourism.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="group relative overflow-hidden rounded-xl aspect-video bg-gray-100 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80" 
              alt="Networking Event" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-bold">Networking & Leadership</span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl aspect-video bg-gray-100 shadow-md">
             <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" 
              alt="Workshop Session" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-bold">Industry Workshop</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-park-magenta mb-4">Reflection & Key Takeaways</h3>
        <ul className="space-y-3">
          {[
            "Understanding the operational complexity of large-scale hospitality venues.",
            "The importance of emotional intelligence in guest service recovery.",
            "Strategic economic planning for seasonal tourism fluctuations."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 bg-park-cloud p-3 rounded-lg">
              <span className="text-park-teal mt-1">✦</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </TicketCard>
    </PageTransition>
  );
};

export default Coursework;