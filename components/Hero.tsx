
import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../types';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

const slides = [
  {
    image: "https://hill.digweblance.com/assets/image/hhp.jpeg",
    subtitle: "Himalayan Excellence",
    title: "Premium Himalayan Estates, Dehradun",
    description: "Exclusive residential and investment plots in the Bhauwala belt. Zero brokerage. Ownership transparency. Direct from shareholders.",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
    subtitle: "Strategic Location",
    title: "The Golden Belt of Bhauwala",
    description: "Nestled between the lush Sal forests and the rising foothills, offering the perfect balance of serenity and urban connectivity.",
  },
  {
    image: "https://hill.digweblance.com/assets/image/slider1.jpg",
    subtitle: "Secure Investments",
    title: "Direct Shareholder, Ownership",
    description: "Transparent legal documentation and direct dealings. No middlemen. Secure your future in Dehradun's fastest-growing corridor.",
  }
];

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0E1A1A]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] ease-linear ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="absolute inset-0 bg-[#0E1A1A]/60 backdrop-blur-[1px]"></div>
          </div>
        </div>
      ))}
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E1A1A] z-[1]"></div>
      
      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-10 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-[#0097b2] hover:bg-[#0097b2]/10 transition-all duration-300 rounded-full bg-black/10 backdrop-blur-sm group"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left text-lg md:text-xl group-hover:-translate-x-1 transition-transform" aria-hidden="true"></i>
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-[#0097b2] hover:bg-[#0097b2]/10 transition-all duration-300 rounded-full bg-black/10 backdrop-blur-sm group"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right text-lg md:text-xl group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
        </button>
      </div>

      {/* Content Slider */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <span key={`subtitle-${current}`} className="inline-block text-[#C9A24D] text-xs md:text-sm font-bold uppercase tracking-[6px] mb-6 animate-slide-up">
            {slides[current].subtitle}
          </span>
        </div>
        
        <div className="overflow-hidden">
          <h1 key={`title-${current}`} className="text-4xl md:text-7xl lg:text-8xl font-normal heading-serif text-[#F5F7F6] mb-8 leading-[1.1] drop-shadow-2xl animate-slide-up">
            {slides[current].title.split(',')[0]} <br />
            <span className="text-[#0097b2] italic">{slides[current].title.split(',')[1] || ''}</span>
          </h1>
        </div>
        
        <div className="overflow-hidden">
          <p key={`desc-${current}`} className="text-lg md:text-2xl text-[#A7B7B3] mb-12 max-w-2xl mx-auto font-serif italic leading-relaxed animate-slide-up">
            {slides[current].description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <a 
            href="https://hill.digweblance.com/assets/image/Hill%20Plots%20-%20Brochure%20.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0097b2] hover:bg-transparent border border-[#0097b2] text-white hover:text-[#0097b2] px-10 py-5 text-xs font-bold uppercase tracking-[3px] transition-all duration-500 shadow-[0_20px_50px_rgba(0,151,178,0.3)] rounded-[10px] inline-block"
          >
            Download Brochure
          </a>
          
          <a 
            href="tel:+917017714385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#0E1A1A] px-10 py-5 text-xs font-bold uppercase tracking-[3px] transition-all duration-500 rounded-[10px]"
          >
            Book Site Visit
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#0097b2] to-transparent"></div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
