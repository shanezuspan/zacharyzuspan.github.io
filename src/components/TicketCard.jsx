import React from 'react';

const TicketCard = ({ children, title, className = "" }) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl border-t-4 border-park-teal p-6 md:p-8 my-6 overflow-hidden group hover:shadow-2xl transition-shadow ${className}`}>
      
      {/* Ticket Cutouts */}
      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-park-cloud rounded-full transform -translate-y-1/2 shadow-inner"></div>
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-park-cloud rounded-full transform -translate-y-1/2 shadow-inner"></div>
      
      {/* Dashed Line */}
      <div className="absolute top-1/2 left-4 right-4 h-px border-t-2 border-dashed border-gray-100 -z-0"></div>

      {title && <h2 className="relative z-10 text-2xl md:text-3xl text-park-deep-blue mb-6 flex items-center gap-2">
        {title}
      </h2>}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TicketCard;