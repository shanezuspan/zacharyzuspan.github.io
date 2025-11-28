import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import TicketCard from '../components/TicketCard';

const Experience = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

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

      {/* Contact Form Section */}
      <TicketCard title="Get In Touch">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-park-deep-blue mb-4 flex items-center gap-2">
              <span>📧</span> Let's Connect
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to connect with fellow hospitality professionals and discuss opportunities in themed entertainment and guest experience management.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-park-cloud p-4 rounded-xl">
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="font-bold text-park-deep-blue">Student</div>
                  <div className="text-sm text-gray-600">San Diego State University</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-park-cloud p-4 rounded-xl">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-bold text-park-deep-blue">Location</div>
                  <div className="text-sm text-gray-600">San Diego, California</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-park-cloud p-4 rounded-xl">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-bold text-park-deep-blue">Focus</div>
                  <div className="text-sm text-gray-600">Theme Park Operations & Guest Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-park-deep-blue mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-park-deep-blue/20 focus:border-park-teal focus:outline-none transition-colors bg-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-park-deep-blue mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-park-deep-blue/20 focus:border-park-teal focus:outline-none transition-colors bg-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-park-deep-blue mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-park-deep-blue/20 focus:border-park-teal focus:outline-none transition-colors bg-white resize-none"
                  placeholder="Tell me about your opportunity or just say hello!"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting || submitted}
                className="w-full py-3 px-6 rounded-xl font-bold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                style={{
                  background: isFormValid && !isSubmitting && !submitted 
                    ? 'linear-gradient(135deg, #4fc3ff, #00b6b0)' 
                    : 'linear-gradient(135deg, #ccc, #999)'
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                )}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-700 text-sm font-medium">
                    ✨ Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </TicketCard>
    </PageTransition>
  );
};

export default Experience;