
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

                {/* Desktop Filter Bar - Advanced UI */}
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
                        >
                            <i className="fas fa-undo-alt text-sm"></i>
                        </button>
                    )}
                </div>

                {/* Mobile Filter Toggle Style (Responsive) */}
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

        {/* Listings Grid */}
        {filteredPlots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPlots.map((plot) => (
                <div 
                key={plot.id} 
                className="bg-[#142626] rounded-[20px] overflow-hidden flex flex-col group border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:border-[#0097b2]/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,151,178,0.1)]"
                >
                <div className="relative h-72 overflow-hidden">
                    <img 
                    src={plot.image} 
                    alt={plot.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                        <span className="bg-[#0E1A1A]/80 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[2px] shadow-2xl">
                            {plot.type === 'Agriculture' ? 'Agricultural' : plot.type}
                        </span>
                    </div>

                    {/* View Badge */}
                    <div className="absolute top-6 right-6 z-10">
                         <div className="bg-[#0097b2] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <i className="fas fa-eye text-[12px]"></i>
                         </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A1A] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative -mt-10 bg-[#142626] rounded-t-[30px] z-20">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[#C9A24D] text-[10px] uppercase tracking-[3px] font-black py-1 px-3 bg-[#C9A24D]/5 rounded-md">
                            {plot.code}
                        </span>
                        <div className="text-[#0097b2] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0097b2] animate-pulse"></span>
                            Available
                        </div>
                    </div>

                    <h3 className="text-2xl font-normal heading-serif text-[#F5F7F6] mb-6 h-16 overflow-hidden leading-tight group-hover:text-[#0097b2] transition-colors duration-300">
                        {plot.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 py-6 border-y border-white/5">
                        <div className="space-y-1">
                            <span className="text-[9px] uppercase tracking-widest text-[#A7B7B3] font-bold">Location</span>
                            <p className="text-xs text-white font-serif italic truncate">{plot.location}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] uppercase tracking-widest text-[#A7B7B3] font-bold">Dimensions</span>
                            <p className="text-xs text-white font-serif italic">{plot.size}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] uppercase tracking-widest text-[#A7B7B3] font-bold">Classification</span>
                            <p className="text-xs text-white font-serif italic">{plot.propertyClass}</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[9px] uppercase tracking-widest text-[#A7B7B3] font-bold">Ownership</span>
                            <p className="text-xs text-white font-serif italic">Verified</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest text-[#A7B7B3] font-bold mb-1">Inaugural Price</span>
                            <div className="text-2xl font-black text-white tracking-tight">
                                {plot.price}
                            </div>
                        </div>
                        <a 
                            href={`https://wa.me/917017714385?text=I am interested in ${plot.title} (${plot.code})`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#0097b2] hover:bg-white text-white hover:text-[#0E1A1A] p-4 rounded-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center"
                            title="Inquire via WhatsApp"
                        >
                            <i className="fab fa-whatsapp text-xl"></i>
                        </a>
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
