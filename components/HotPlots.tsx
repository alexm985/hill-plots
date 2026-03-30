
import React, { useState, useMemo } from 'react';
import { PLOTS } from '../constants';

interface HotPlotsProps {
    onRequestDetails: () => void;
}

const HotPlots: React.FC<HotPlotsProps> = ({ onRequestDetails }) => {
  const [typeFilter, setTypeFilter] = useState<'All' | 'Residential' | 'Agriculture'>('All');
  const [priceFilter, setPriceFilter] = useState<'All' | 'Budget' | 'Premium' | 'Luxury'>('All');

  const filteredPlots = useMemo(() => {
    return PLOTS.filter(plot => {
      const matchesType = typeFilter === 'All' || plot.type === typeFilter;
      
      let matchesPrice = true;
      if (priceFilter !== 'All') {
        const priceStr = plot.price.toLowerCase();
        const isLakhs = priceStr.includes('l');
        const isCrores = priceStr.includes('cr');
        const isSqy = priceStr.includes('/ sqy');
        const numericValue = parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;

        if (priceFilter === 'Budget') {
          matchesPrice = (isSqy && numericValue < 12000) || (isLakhs && numericValue < 50) && !isCrores;
        } else if (priceFilter === 'Premium') {
          matchesPrice = (isSqy && numericValue >= 12000 && numericValue <= 20000) || (isLakhs && numericValue >= 50 && numericValue <= 90);
        } else if (priceFilter === 'Luxury') {
          matchesPrice = (isSqy && numericValue > 20000) || isCrores || (isLakhs && numericValue > 90);
        }
      }

      return matchesType && matchesPrice;
    });
  }, [typeFilter, priceFilter]);

  const activeFiltersCount = (typeFilter !== 'All' ? 1 : 0) + (priceFilter !== 'All' ? 1 : 0);

  const handleBookVisit = (plotTitle: string, plotCode: string) => {
    window.open(`https://wa.me/917017714385?text=Hello, I am interested in ${plotTitle} (${plotCode}). I would like to book a site visit.`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-[#0E1A1A] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        
        {/* Advanced Header & Filter Section */}
        <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <div className="max-w-xl">
                    <span className="text-[#C9A24D] font-bold text-[11px] uppercase tracking-[4px] block mb-3">Inventory Explorer</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal heading-serif text-[#F5F7F6] leading-tight mb-6">
                        Find Your <span className="text-[#0097b2] italic">Sanctuary</span>
                    </h2>
                    <div className="flex items-center gap-4 text-[#A7B7B3] font-serif italic text-lg">
                        <span className="w-12 h-[1px] bg-white/10"></span>
                        <p>Showing <span className="text-white font-sans not-italic font-bold">{filteredPlots.length}</span> curated plots in Dehradun</p>
                    </div>
                </div>

                {/* Desktop Filter Bar */}
                <div className="hidden lg:flex items-center bg-[#142626] border border-white/5 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                    <div className="px-6 py-2 border-r border-white/5">
                        <label className="block text-[9px] uppercase tracking-widest text-[#C9A24D] font-black mb-2">Category</label>
                        <div className="flex gap-2">
                            {[
                                { id: 'All', icon: 'fa-th-large' },
                                { id: 'Residential', icon: 'fa-house-user' },
                                { id: 'Agriculture', icon: 'fa-leaf' }
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setTypeFilter(type.id as any)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                                        typeFilter === type.id 
                                        ? 'bg-[#0097b2] text-white shadow-lg' 
                                        : 'text-[#A7B7B3] hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    <i className={`fas ${type.icon} text-[12px]`}></i>
                                    {type.id === 'Agriculture' ? 'Agricultural' : type.id}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="px-6 py-2 border-r border-white/5">
                        <label className="block text-[9px] uppercase tracking-widest text-[#C9A24D] font-black mb-2">Investment Range</label>
                        <div className="flex gap-2">
                            {['All', 'Budget', 'Premium', 'Luxury'].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => setPriceFilter(range as any)}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                                        priceFilter === range 
                                        ? 'bg-[#C9A24D] text-[#0E1A1A] shadow-lg' 
                                        : 'text-[#A7B7B3] hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>

                    {activeFiltersCount > 0 && (
                        <button 
                            onClick={() => { setTypeFilter('All'); setPriceFilter('All'); }}
                            className="ml-4 mr-4 p-3 text-[#A7B7B3] hover:text-[#0097b2] transition-colors"
                            title="Reset Filters"
                            aria-label="Reset Filters"
                        >
                            <i className="fas fa-undo-alt text-sm" aria-hidden="true"></i>
                        </button>
                    )}
                </div>

                {/* Mobile Filter */}
                <div className="lg:hidden flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-widest text-[#C9A24D] font-bold pl-1">Property Type</label>
                            <select 
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value as any)}
                                className="w-full bg-[#142626] border border-white/10 text-white p-4 rounded-xl text-sm font-bold appearance-none outline-none focus:border-[#0097b2]"
                            >
                                <option value="All">All Categories</option>
                                <option value="Residential">Residential</option>
                                <option value="Agriculture">Agricultural</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-widest text-[#C9A24D] font-bold pl-1">Investment</label>
                            <select 
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value as any)}
                                className="w-full bg-[#142626] border border-white/10 text-white p-4 rounded-xl text-sm font-bold appearance-none outline-none focus:border-[#C9A24D]"
                            >
                                <option value="All">All Ranges</option>
                                <option value="Budget">Budget</option>
                                <option value="Premium">Premium</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Listings Grid - Updated to match Home Page UI */}
        {filteredPlots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlots.map((plot) => (
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
                      {plot.type === 'Agriculture' ? 'Agricultural' : plot.type}
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
                            onClick={() => handleBookVisit(plot.title, plot.code)}
                            className="bg-transparent border border-[#0097b2] text-[#0097b2] hover:bg-[#0097b2] hover:text-white px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 rounded-[10px]"
                        >
                            Book Visit
                        </button>
                    </div>
                  </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-32 bg-[#142626] rounded-[30px] border border-dashed border-white/10">
                <div className="w-24 h-24 bg-[#0E1A1A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <i className="fas fa-search text-3xl text-[#C9A24D] opacity-40"></i>
                </div>
                <h3 className="text-3xl font-normal heading-serif text-[#F5F7F6] mb-4">No matching sanctuaries found</h3>
                <p className="text-[#A7B7B3] italic font-serif text-lg max-w-md mx-auto leading-relaxed">
                    Our current portfolio in this range is exhausted. Try expanding your search criteria to discover hidden gems.
                </p>
                <button 
                    onClick={() => { setTypeFilter('All'); setPriceFilter('All'); }}
                    className="mt-12 bg-transparent border-b border-[#0097b2] text-[#0097b2] py-2 text-xs font-bold uppercase tracking-[4px] hover:text-white hover:border-white transition-all"
                >
                    Clear All Preferences
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default HotPlots;
