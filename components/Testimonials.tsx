import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0E1A1A] border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 text-center">
        <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-[4px] mb-4 block">Voices of Trust</span>
        <h2 className="text-4xl md:text-5xl font-normal heading-serif text-[#F5F7F6] mb-4">Happy Landowners</h2>
        <div className="w-16 h-[3px] bg-[#0097b2] mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-[#142626] p-10 rounded-[10px] border border-white/5 text-left hover:border-[#0097b2]/30 transition-all duration-500 group">
              <div className="flex text-[#C9A24D] mb-6 space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[10px]"></i>
                ))}
              </div>
              <p className="text-[#A7B7B3] italic font-serif text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center pt-6 border-t border-white/5">
                <div className="w-10 h-10 bg-[#0097b2]/20 border border-[#0097b2]/30 rounded-full flex items-center justify-center text-[#0097b2] font-bold text-sm mr-4 group-hover:bg-[#0097b2] group-hover:text-white transition-colors">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F7F6] tracking-wider text-sm uppercase">{t.name}</h4>
                  <p className="text-[11px] text-[#C9A24D] uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;