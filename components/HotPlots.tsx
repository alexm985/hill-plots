
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

  return (
    <div className="pt-32 pb-24 bg-[#142626] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
                <span className="text-[#C9A24D] font-bold text-[13px] uppercase tracking-[2px] block mb-2">Premium Inventory</span>
                <h2 className="text-4xl md:text-5xl font-normal heading-serif mb-4 text-[#F5F7F6]">Active Plot Listings</h2>
                <div className="w-16 h-[3px] bg-[#C9A24D]"></div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#A7B7B3] font-bold">Category</label>
                    <div className="flex bg-[#0E1A1A] p-1 rounded-lg border border-white/5">
                        {['All', 'Residential', 'Agriculture'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setTypeFilter(type as any)}
                                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${
                                    typeFilter === type 
                                    ? 'bg-[#0097b2] text-white shadow-lg' 
                                    : 'text-[#A7B7B3] hover:text-white'
                                }`}
                            >
                                {type === 'Agriculture' ? 'Agricultural' : type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#A7B7B3] font-bold">Investment Range</label>
                    <div className="flex bg-[#0E1A1A] p-1 rounded-lg border border-white/5">
                        {['All', 'Budget', 'Premium', 'Luxury'].map((range) => (
                            <button
                                key={range}
                                onClick={() => setPriceFilter(range as any)}
                                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${
                                    priceFilter === range 
                                    ? 'bg-[#C9A24D] text-[#0E1A1A] shadow-lg' 
                                    : 'text-[#A7B7B3] hover:text-white'
                                }`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

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
                
                <div className="p-7 flex flex-col flex-grow relative">
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
                        <a 
                            href={`https://wa.me/917017714385?text=I am interested in ${plot.title} (${plot.code})`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent border border-[#0097b2] text-[#0097b2] hover:bg-[#0097b2] hover:text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 rounded-[10px]"
                        >
                            Book Visit
                        </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-[#0E1A1A] rounded-[20px] border border-dashed border-white/10">
                <i className="fas fa-search text-4xl text-[#C9A24D] mb-6 opacity-20"></i>
                <h3 className="text-2xl font-normal heading-serif text-[#F5F7F6] mb-2">No matching plots found</h3>
                <p className="text-[#A7B7B3] italic font-serif">Try adjusting your filters to see more results.</p>
                <button 
                    onClick={() => { setTypeFilter('All'); setPriceFilter('All'); }}
                    className="mt-8 text-[#0097b2] text-xs font-bold uppercase tracking-[2px] hover:underline"
                >
                    Reset All Filters
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default HotPlots;
