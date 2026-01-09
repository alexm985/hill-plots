
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
    <section className="py-16 md:py-24 bg-[#0E1A1A] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-10 relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#C9A24D] text-[10px] md:text-xs font-bold uppercase tracking-[4px] mb-3 md:mb-4 block">Voices of Trust</span>
          <h2 className="text-3xl md:text-5xl font-normal heading-serif text-[#F5F7F6] mb-4">Happy Landowners</h2>
          <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#0097b2] mx-auto"></div>
        </div>
        
        <div className="relative group">
          {/* Navigation Buttons - Visible on hover on desktop, always visible on mobile/tablet */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-2 md:-mx-4 lg:-mx-8">
            <button 
              onClick={() => onManualNav('prev')}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-[#142626]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-[#A7B7B3] hover:text-[#0097b2] hover:border-[#0097b2]/50 transition-all shadow-xl"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-xs md:text-sm"></i>
            </button>
            <button 
              onClick={() => onManualNav('next')}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-[#142626]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-[#A7B7B3] hover:text-[#0097b2] hover:border-[#0097b2]/50 transition-all shadow-xl"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-xs md:text-sm"></i>
            </button>
          </div>

          <div 
            className="relative overflow-hidden cursor-grab active:cursor-grabbing px-2"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div 
              className="flex transition-transform duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ 
                transform: `translateX(-${offset}%)`,
                width: `${(TESTIMONIALS.length * 100) / visibleItems}%` 
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  className="px-2 md:px-4"
                  style={{ width: `${100 / TESTIMONIALS.length}%` }}
                >
                  <div className="bg-[#142626] p-6 md:p-10 rounded-[12px] border border-white/5 text-left hover:border-[#0097b2]/30 transition-all duration-500 h-full flex flex-col shadow-2xl">
                    <div className="flex text-[#C9A24D] mb-4 md:mb-6 space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-[8px] md:text-[10px]"></i>
                      ))}
                    </div>
                    <p className="text-[#A7B7B3] italic font-serif text-base md:text-lg leading-relaxed mb-6 md:mb-10 flex-grow">
                      "{t.text}"
                    </p>
                    <div className="flex items-center pt-6 md:pt-8 border-t border-white/5 mt-auto">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0097b2]/10 border border-[#0097b2]/20 rounded-full flex items-center justify-center text-[#0097b2] font-bold text-base md:text-lg mr-3 md:mr-4">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#F5F7F6] tracking-wider text-xs md:text-sm uppercase">{t.name}</h4>
                        <p className="text-[9px] md:text-[11px] text-[#C9A24D] uppercase tracking-widest mt-1 font-semibold">{t.role}</p>
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
