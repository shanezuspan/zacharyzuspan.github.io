import React from 'react';
import PageTransition from '../components/PageTransition';
import TicketCard from '../components/TicketCard';

const Home = () => {
  return (
    <PageTransition>
      <h1 className="text-4xl md:text-5xl text-park-deep-blue mb-8 drop-shadow-sm flex items-center gap-3">
        <span>🏠</span> Welcome to My Portfolio
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Photo Container */}
        <div className="lg:w-1/3 w-full">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-park-magenta to-park-yellow rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              alt="Zachary Zuspan Professional Headshot Placeholder" 
              className="relative w-full aspect-[3/4] object-cover rounded-[1.5rem] border-4 border-white shadow-xl"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-park-deep-blue shadow-lg">
              Zachary Zuspan
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="lg:w-2/3 w-full">
          <TicketCard>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Hello! My name is <strong className="text-park-magenta">Zachary Zuspan</strong>, and I am pursuing an interdisciplinary degree in <strong>Hospitality & Tourism Management, Recreation & Tourism Management, and Economics</strong> at San Diego State University.
              </p>
              
              <p className="mb-6">
                I am passionate about creating <span className="inline-block bg-park-yellow/30 px-2 rounded transform -rotate-1">exceptional guest experiences</span> in theme parks, attractions, and hospitality environments. My journey includes hands-on magic-making in food & beverage, guest operations, merchandise, and themed entertainment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-park-cloud p-4 rounded-xl border border-park-deep-blue/10 flex items-center gap-3">
                  <span className="text-2xl">🐳</span>
                  <div>
                    <div className="font-bold text-park-deep-blue">SeaWorld San Diego</div>
                    <div className="text-sm">Food & Beverage Ambassador</div>
                  </div>
                </div>
                <div className="bg-park-cloud p-4 rounded-xl border border-park-deep-blue/10 flex items-center gap-3">
                  <span className="text-2xl">🏰</span>
                  <div>
                    <div className="font-bold text-park-deep-blue">Walt Disney World</div>
                    <div className="text-sm">Merchandise Host</div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-gray-400 italic">
                Explore the "lands" of my portfolio using the navigation above—each section is a new attraction in my professional journey!
              </p>
            </div>
          </TicketCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;