
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  forceSolid?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, forceSolid = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = scrolled || forceSolid;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isSolid ? 'bg-[#0E1A1A]/98 backdrop-blur-md py-2 border-b border-white/5 shadow-2xl' : 'py-4 bg-transparent'}`}>
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => {
              setCurrentPage('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Logo Container: 300x80px as requested on desktop */}
            <div className="relative flex items-center h-[60px] md:h-[80px] w-[180px] md:w-[300px]">
              <img 
                src="https://i.ibb.co/fVgJT4Lw/logo.png" 
                alt="Hill Plots Logo" 
                className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Try alternative direct link structure for imgbb
                  if (!target.src.includes('JR1P0nHH')) {
                    target.src = 'https://i.ibb.co/JR1P0nHH/logo.png';
                  } else {
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }
                }}
              />
              {/* Fallback Text Branding */}
              <span style={{ display: 'none' }} className="text-xl md:text-2xl font-bold tracking-[2px] uppercase text-[#F5F7F6] whitespace-nowrap">
                HILL <span className="text-[#0097b2]">PLOTS</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-10">
            <button 
              onClick={() => {
                setCurrentPage('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('HotPlots')}
              className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
            >
              Listings
            </button>
            <button 
              onClick={() => {
                setCurrentPage('Home');
                setTimeout(() => document.getElementById('process-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
            >
              The Process
            </button>
            <button 
              onClick={() => {
                setCurrentPage('Home');
                setTimeout(() => document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
            >
              Calculator
            </button>
            
            <a 
              href="https://wa.me/917017714385" 
              className="bg-[#0097b2] hover:bg-white border border-[#0097b2] text-white hover:text-[#0097b2] px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all rounded-[8px] shadow-lg hover:shadow-[#0097b2]/20"
            >
              Site Visit
            </a>
          </nav>
          
          <div className="lg:hidden flex items-center">
            <a 
              href="https://wa.me/917017714385" 
              className="mr-4 text-[#0097b2] text-2xl"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <button className="text-white text-2xl" aria-label="Open Menu">
                <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
