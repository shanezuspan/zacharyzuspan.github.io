import React from 'react';
import PageTransition from '../components/PageTransition';
import TicketCard from '../components/TicketCard';

const Experience = () => {
  return (
    <PageTransition>
      <h1 className="text-4xl text-park-deep-blue mb-6 flex items-center gap-3">
        <span>🎟</span> Professional Journey
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="col-span-full md:col-span-1 bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between hover:bg-blue-700 transition shadow-lg group">
          <div>
            <div className="text-3xl mb-2">in</div>
            <div className="font-bold text-lg">Connect on LinkedIn</div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
            View Profile <span>→</span>
          </div>
        </a>
        
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-md border border-gray-100">
           <h3 className="font-bold text-park-deep-blue text-lg mb-2">Core Skills</h3>
           <div className="flex flex-wrap gap-2">
             {['Guest Relations', 'POS Operations', 'Crowd Management', 'Service Leadership', 'Matterport 3D', 'Event Logistics'].map(skill => (
               <span key={skill} className="px-3 py-1 bg-park-cloud text-park-deep-blue rounded-full text-sm font-medium border border-park-deep-blue/10">
                 {skill}
               </span>
             ))}
           </div>
        </div>
      </div>

      <TicketCard title="Theme Park Experience">
        {/* SeaWorld */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 border-b border-gray-100 pb-10">
          <div className="md:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-park-teal/20">
              <img 
                src="https://images.unsplash.com/photo-1575424909138-70b05d80c092?auto=format&fit=crop&w=800&q=80" 
                alt="SeaWorld Atmosphere" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-park-deep-blue">Food & Beverage Ambassador</h3>
            <div className="text-park-teal font-bold mb-1">SeaWorld San Diego</div>
            <div className="text-sm text-gray-500 mb-4">November 2025 – Present</div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-park-magenta">•</span> Provide exceptional guest service across multiple high-volume dining locations.</li>
              <li className="flex gap-2"><span className="text-park-magenta">•</span> Assist guests with allergy concerns and dietary requirements to ensure safety.</li>
              <li className="flex gap-2"><span className="text-park-magenta">•</span> Maintain strict sanitation standards while managing rapid transaction speeds.</li>
            </ul>
          </div>
        </div>

        {/* Disney */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
             <div className="rounded-xl overflow-hidden shadow-lg border-4 border-park-magenta/20">
              <img 
                src="https://images.unsplash.com/photo-1545629676-47b2d56a3198?auto=format&fit=crop&w=800&q=80" 
                alt="Disney World Atmosphere" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-park-deep-blue">Merchandise Host</h3>
            <div className="text-park-magenta font-bold mb-1">Disney College Program</div>
            <div className="text-sm text-gray-500 mb-4">January 2025 – June 2025</div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-park-teal">•</span> Created magical moments for guests in a fast-paced retail environment.</li>
              <li className="flex gap-2"><span className="text-park-teal">•</span> Managed inventory and visual merchandising displays to company standards.</li>
              <li className="flex gap-2"><span className="text-park-teal">•</span> Utilized storytelling to enhance the guest purchase experience.</li>
            </ul>
          </div>
        </div>
      </TicketCard>

      <TicketCard title="Education">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-park-deep-blue">San Diego State University</h3>
          <p className="text-gray-500">August 2022 – Present</p>
          <p className="mt-2 text-gray-700"><strong>Interdisciplinary Studies:</strong> Hospitality & Tourism Management, Recreation & Tourism Management, Economics.</p>
          <div className="mt-2 text-sm text-park-magenta font-semibold">★ Dean's List • Phi Alpha Theta Honor Society</div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-park-deep-blue">Palm Springs High School</h3>
          <p className="text-gray-500">Graduated May 2019</p>
          <p className="mt-2 text-gray-700">Golden State Seal Merit Diploma</p>
        </div>
      </TicketCard>
    </PageTransition>
  );
};

export default Experience;