
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  forceSolid?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, forceSolid = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isSolid = scrolled || forceSolid;

  const handleNavClick = (page: Page, scrollTarget?: string) => {
    setIsMenuOpen(false);
    if (page === 'Home') {
      setCurrentPage('Home');
      if (scrollTarget) {
        setTimeout(() => {
          document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isSolid ? 'bg-[#0E1A1A]/98 backdrop-blur-md py-2 border-b border-white/5 shadow-2xl' : 'py-4 bg-transparent'}`}>
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNavClick('Home')}
            >
              <div className="relative flex items-center h-[60px] md:h-[80px] w-[180px] md:w-[300px]">
                <img 
                  src="https://i.ibb.co/fVgJT4Lw/logo.png" 
                  alt="Hill Plots Logo" 
                  className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('JR1P0nHH')) {
                      target.src = 'https://i.ibb.co/JR1P0nHH/logo.png';
                    } else {
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }
                  }}
                />
                <span style={{ display: 'none' }} className="text-xl md:text-2xl font-bold tracking-[2px] uppercase text-[#F5F7F6] whitespace-nowrap">
                  HILL <span className="text-[#0097b2]">PLOTS</span>
                </span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-10">
              <button 
                onClick={() => handleNavClick('Home')}
                className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('HotPlots')}
                className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
              >
                Listings
              </button>
              <button 
                onClick={() => handleNavClick('Home', 'process-section')}
                className="text-xs tracking-widest uppercase hover:text-[#0097b2] transition-colors font-bold"
              >
                The Process
              </button>
              <button 
                onClick={() => handleNavClick('Home', 'calculator-section')}
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
              <button 
                className="text-white text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0097b2] rounded-md"
                aria-label="Toggle Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[999] bg-[#0E1A1A] transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10 pb-10">
          <div className="flex flex-col space-y-8">
            <button 
              onClick={() => handleNavClick('Home')}
              className="text-2xl font-normal heading-serif text-left border-b border-white/5 pb-4 hover:text-[#0097b2] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('HotPlots')}
              className="text-2xl font-normal heading-serif text-left border-b border-white/5 pb-4 hover:text-[#0097b2] transition-colors"
            >
              Our Listings
            </button>
            <button 
              onClick={() => handleNavClick('Home', 'process-section')}
              className="text-2xl font-normal heading-serif text-left border-b border-white/5 pb-4 hover:text-[#0097b2] transition-colors"
            >
              The Process
            </button>
            <button 
              onClick={() => handleNavClick('Home', 'calculator-section')}
              className="text-2xl font-normal heading-serif text-left border-b border-white/5 pb-4 hover:text-[#0097b2] transition-colors"
            >
              Area Calculator
            </button>
            <button 
              onClick={() => handleNavClick('Home', 'about')}
              className="text-2xl font-normal heading-serif text-left border-b border-white/5 pb-4 hover:text-[#0097b2] transition-colors"
            >
              About Us
            </button>
          </div>

          <div className="mt-auto">
            <a 
              href="https://wa.me/917017714385" 
              className="block w-full bg-[#0097b2] text-white text-center py-5 rounded-[12px] font-bold uppercase tracking-[3px] text-xs shadow-xl"
            >
              Book Site Visit
            </a>
            <div className="flex justify-center space-x-8 mt-10">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[#0097b2] text-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0097b2] rounded-md"><i className="fab fa-instagram" aria-hidden="true"></i></a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-[#0097b2] text-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0097b2] rounded-md"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/@hillplots" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/40 hover:text-[#0097b2] text-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0097b2] rounded-md"><i className="fab fa-youtube" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
