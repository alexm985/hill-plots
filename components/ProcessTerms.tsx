import React from 'react';

const ProcessTerms: React.FC = () => {
  return (
    <section id="process-section" className="py-24 bg-[#0E1A1A]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-4xl font-normal heading-serif mb-4">Booking & Verification Terms</h2>
          <div className="w-16 h-[3px] bg-[#C9A24D]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#142626] p-10 rounded-[10px] border border-white/5">
            <h4 className="text-2xl font-normal heading-serif mb-8 text-[#C9A24D]">The Process</h4>
            <ul className="space-y-6">
              {[
                { label: 'Token Booking', desc: '₹51,000 initiates the process and releases land papers for verification.' },
                { label: 'Verification Window', desc: '3-working-day period provided for independent legal check.' },
                { label: 'Advance', desc: 'After verification, 33% payment is required to secure the plot.' },
                { label: 'Settlement', desc: '2-3 month window provided for the remaining payment.' },
                { label: 'Closing', desc: 'Final 67% balance is payable at the time of registration.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#0097b2] mr-4 mt-1">•</span>
                  <div className="text-[#A7B7B3]">
                    <strong className="text-[#F5F7F6] font-bold">{item.label}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#142626] p-10 rounded-[10px] border-l-4 border-[#0097b2] border-y border-white/5 border-r">
            <h4 className="text-2xl font-normal heading-serif mb-8 text-[#C9A24D]">Payment Benefits</h4>
            <ul className="space-y-6">
              {[
                { label: 'Full Disclosure', desc: 'All registrations completed at Vikasnagar Tehsil courts for legal authenticity.' },
                { label: 'Early Payment Discount', desc: 'Special discount offered if full payment is completed within 2 weeks.' },
                { label: 'Zero Brokerage', desc: 'No hidden commissions or middle-man fees in any transaction.' },
                { label: 'Genuine Options', desc: 'Backed by ownership clarity and complete on-ground support.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#0097b2] mr-4 mt-1">•</span>
                  <div className="text-[#A7B7B3]">
                    <strong className="text-[#F5F7F6] font-bold">{item.label}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTerms;