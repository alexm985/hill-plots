
import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [visibleItems]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = TESTIMONIALS.length - visibleItems;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = TESTIMONIALS.length - visibleItems;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const onManualNav = (direction: 'prev' | 'next') => {
    stopAutoSlide();
    if (direction === 'prev') handlePrev();
    else handleNext();
    startAutoSlide();
  };

  const offset = currentIndex * (100 / visibleItems);

  return (
    <section className="py-20 md:py-28 bg-[#0E1A1A] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 relative">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C9A24D] text-[10px] md:text-xs font-bold uppercase tracking-[5px] mb-4 block">Social Proof</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal heading-serif text-[#F5F7F6] mb-6">What Our Clients Say</h2>
          <div className="w-16 h-[2px] bg-[#0097b2] mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 lg:-left-12 z-30 pointer-events-none">
            <button 
              onClick={() => onManualNav('prev')}
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-[#142626] border border-white/10 rounded-full flex items-center justify-center text-[#0097b2] hover:bg-[#0097b2] hover:text-white transition-all shadow-2xl"
              aria-label="Previous"
            >
              <i className="fas fa-arrow-left text-sm"></i>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 lg:-right-12 z-30 pointer-events-none">
            <button 
              onClick={() => onManualNav('next')}
              className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-[#142626] border border-white/10 rounded-full flex items-center justify-center text-[#0097b2] hover:bg-[#0097b2] hover:text-white transition-all shadow-2xl"
              aria-label="Next"
            >
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>

          <div 
            className="relative overflow-hidden"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div 
              className="flex transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
              style={{ 
                transform: `translateX(-${offset}%)`,
                width: `${(TESTIMONIALS.length * 100) / visibleItems}%` 
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  className="px-4"
                  style={{ width: `${100 / TESTIMONIALS.length}%` }}
                >
                  <div className="bg-[#142626] p-8 md:p-12 rounded-[15px] border border-white/5 text-left h-full flex flex-col relative group hover:border-[#0097b2]/40 transition-all duration-500 shadow-xl">
                    <div className="absolute top-8 right-8 text-[#0097b2]/10 group-hover:text-[#0097b2]/20 transition-colors">
                      <i className="fas fa-quote-right text-6xl"></i>
                    </div>
                    
                    <div className="flex text-[#C9A24D] mb-6 space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-xs"></i>
                      ))}
                    </div>

                    <p className="text-[#A7B7B3] font-serif italic text-lg md:text-xl leading-relaxed mb-10 relative z-10">
                      "{t.text}"
                    </p>

                    <div className="flex items-center pt-8 border-t border-white/5 mt-auto">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0097b2] to-[#0E1A1A] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mr-5 shadow-lg">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#F5F7F6] tracking-widest text-sm uppercase">{t.name}</h4>
                        <p className="text-[10px] md:text-[11px] text-[#C9A24D] uppercase tracking-[3px] mt-1 font-bold">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
