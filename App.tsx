
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import HotPlots from './components/HotPlots';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './components/AboutUs';
import ProcessTerms from './components/ProcessTerms';
import AreaCalculator from './components/AreaCalculator';
import FAQ from './components/FAQ';
import VideoShowcase from './components/VideoShowcase';
import { PLOTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if ((window as any).lucide) (window as any).lucide.createIcons();
  }, [currentPage]);

  const handleRequestDetails = () => {
    window.open("https://wa.me/917017714385?text=Hello, I would like to request details for a plot in Dehradun.", "_blank");
  };

  const featuredPlots = PLOTS.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-[#0E1A1A]">
      <main className="flex-grow">
        {currentPage === 'Home' ? (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Hero setCurrentPage={setCurrentPage} />
            
            <AboutUs />
            
            <VideoShowcase />

            {/* Featured Listings Preview */}
            <section className="py-24 bg-[#142626]">
              <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
                <div className="mb-16">
                    <span className="text-[#C9A24D] font-bold text-[13px] uppercase tracking-[2px] block mb-2">Premium Inventory</span>
                    <h2 className="text-4xl md:text-5xl font-normal heading-serif mb-4 text-[#F5F7F6]">Active Plot Listings</h2>
                    <div className="w-16 h-[3px] bg-[#C9A24D]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {featuredPlots.map((plot) => (
                    <div 
                      key={plot.id} 
                      className="bg-[#142626] rounded-[12px] overflow-hidden flex flex-col group border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-[#0097b2]/40 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(0,151,178,0.1)]"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img 
                          src={plot.image} 
                          alt={plot.title} 
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#0097b2] text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider z-10 shadow-lg">
                          {plot.type}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A1A]/70 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="p-7 flex flex-col flex-grow">
                        <span className="text-[#C9A24D] text-[11px] uppercase tracking-[2px] font-bold mb-2">
                            {plot.code}
                        </span>
                        <h3 className="text-xl font-normal heading-serif text-[#F5F7F6] mb-4 h-14 overflow-hidden leading-snug group-hover:text-[#0097b2] transition-colors duration-300">
                            {plot.title}
                        </h3>
                        
                        <div className="text-[13px] text-[#A7B7B3] mb-6 py-3 border-y border-white/5 flex flex-col gap-2 flex-grow">
                            <div className="flex justify-between items-center">
                                <span className="opacity-60 italic">Location:</span>
                                <b className="font-normal italic text-[#F5F7F6] text-right ml-4">{plot.location}</b>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="opacity-60 italic">Size:</span>
                                <b className="font-normal italic text-[#F5F7F6]">{plot.size}</b>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="opacity-60 italic">Class:</span>
                                <b className="font-normal italic text-[#F5F7F6]">{plot.propertyClass}</b>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-2">
                            <div className="text-lg font-bold text-[#0097b2] tracking-tight">
                                {plot.price}
                            </div>
                            <button 
                                onClick={handleRequestDetails}
                                className="bg-transparent border border-[#0097b2] text-[#0097b2] hover:bg-[#0097b2] hover:text-white px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 rounded-[10px]"
                            >
                                Book Visit
                            </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => setCurrentPage('HotPlots')}
                    className="group relative bg-transparent border border-[#0097b2] text-[#0097b2] hover:bg-[#0097b2] hover:text-white px-12 py-4 text-xs font-bold uppercase tracking-[3px] transition-all duration-500 rounded-[10px]"
                  >
                    View All 16 Listings
                    <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
                  </button>
                </div>
              </div>
            </section>

            <section className="relative py-24 overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://otcgrtgpkrksjlmjjcrl.supabase.co/storage/v1/object/sign/Iamges/hhw.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82OTk2ZThjYS02MDA5LTRkNWUtYmJmYi1lYjFlNzA2NTUyZjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJYW1nZXMvaGhwLmpwZWciLCJpYXQiOjE3Njc5MDA3NzMsImV4cCI6MjA4MzI2MDc3M30.DwhV3WZhCjnaZWsHOtyYXmhzqqJhrcPhr7E7AxhCAVk")' }}
              >
                <div className="absolute inset-0 bg-[#0E1A1A]/90 backdrop-blur-[2px]"></div>
              </div>

              <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10 text-center">
                <h2 className="text-4xl md:text-5xl font-normal heading-serif mb-12 text-white">Handpicked Himalayan Sanctuary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="p-8 group cursor-default bg-[#142626]/40 backdrop-blur-md border border-white/5 rounded-[10px] hover:border-[#0097b2]/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-[#0097b2]/10 border border-[#0097b2]/20 rounded-sm flex items-center justify-center text-[#0097b2] mx-auto mb-6 group-hover:bg-[#0097b2] group-hover:text-white transition-all duration-500">
                      <i className="fas fa-shield-alt text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-widest uppercase text-sm text-[#F5F7F6]">Verified Origins</h3>
                    <p className="text-[#A7B7B3] text-sm italic font-serif">Deep legal audits ensure every plot has a clean, undisputed lineage before listing.</p>
                  </div>
                  <div className="p-8 group cursor-default bg-[#142626]/40 backdrop-blur-md border border-white/5 rounded-[10px] hover:border-[#0097b2]/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-[#0097b2]/10 border border-[#0097b2]/20 rounded-sm flex items-center justify-center text-[#0097b2] mx-auto mb-6 group-hover:bg-[#0097b2] group-hover:text-white transition-all duration-500">
                      <i className="fas fa-chart-line text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-widest uppercase text-sm text-[#F5F7F6]">Equity Growth</h3>
                    <p className="text-[#A7B7B3] text-sm italic font-serif">Strategic acquisition in the Bhauwala belt promises superior year-on-year appreciation.</p>
                  </div>
                  <div className="p-8 group cursor-default bg-[#142626]/40 backdrop-blur-md border border-white/5 rounded-[10px] hover:border-[#0097b2]/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-[#0097b2]/10 border border-[#0097b2]/20 rounded-sm flex items-center justify-center text-[#0097b2] mx-auto mb-6 group-hover:bg-[#0097b2] group-hover:text-white transition-all duration-500">
                      <i className="fas fa-mountain text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-widest uppercase text-sm text-[#F5F7F6]">Direct Ownership</h3>
                    <p className="text-[#A7B7B3] text-sm italic font-serif">Bypass the middleman. Engage directly with shareholders for the most transparent pricing.</p>
                  </div>
                </div>
              </div>
            </section>

            <ProcessTerms />
            <AreaCalculator />
            <FAQ />
            <Testimonials />
          </>
        ) : (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} forceSolid={true} />
            <HotPlots onRequestDetails={handleRequestDetails} />
          </>
        )}
      </main>

      <footer className="py-24 bg-[#0E1A1A] border-t border-white/5 text-center">
        <div className="max-w-[1300px] mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-normal heading-serif mb-6 text-[#F5F7F6]">Ready to Explore?</h2>
            <p className="text-xl text-[#A7B7B3] max-w-2xl mx-auto italic font-serif mb-12 leading-relaxed">
                "Experience the beauty, environment, and growth potential of the Bhauwala belt firsthand."
            </p>
            <a 
              href="https://wa.me/917017714385" 
              className="inline-block bg-[#0097b2] hover:bg-transparent border border-[#0097b2] text-white hover:text-[#0097b2] px-12 py-5 font-bold uppercase tracking-[3px] transition-all shadow-2xl mb-24 rounded-[10px]"
            >
              Contact via WhatsApp
            </a>

            <div className="pt-12 border-t border-white/5">
                <div className="flex justify-center space-x-10 mb-10">
                    <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-2xl"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-2xl"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-2xl"><i className="fab fa-youtube"></i></a>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-[#A7B7B3] text-sm font-serif tracking-widest">
                        © 2026 Hill Plots Dehradun. Transparent Himalayan Real Estate.
                    </p>
                    <div className="text-[#C9A24D] text-[10px] uppercase tracking-[4px] font-bold py-1 border-t border-white/5 mt-2">
                        Design and Developed by Elevencreations
                    </div>
                </div>
            </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
