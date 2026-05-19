import React, { useState } from 'react';

const AreaCalculator: React.FC = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState({
    totalCost: 0,
    sqYards: 0,
    biswa: 0,
    bigha: 0,
    acres: 0
  });

  const calculate = () => {
    setError(null);
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const p = parseFloat(price) || 0;

    if (l <= 0 || w <= 0) {
      setError("Please enter valid positive dimensions for width and depth.");
      return;
    }

    const sqFeet = l * w;
    const sqYards = sqFeet / 9;
    const biswa = sqYards / 45; 
    const bigha = sqYards / 900;
    const acres = sqYards / 4840;
    const totalCostValue = Math.round(sqYards * p);

    setResults({
      totalCost: totalCostValue,
      sqYards,
      biswa,
      bigha,
      acres
    });
  };

  return (
    <section id="calculator-section" className="py-24 bg-[#142626]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="bg-[#0E1A1A] rounded-[10px] p-10 md:p-16 border border-white/5 max-w-[1000px] mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold heading-serif mb-8 text-[#F5F7F6]">Area Calculator</h3>
              
              <div className="space-y-6">
                {error && (
                  <div role="alert" className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-[10px] text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="front-width" className="block mb-2 text-[#A7B7B3] text-sm font-bold uppercase tracking-widest">Front Width (ft)</label>
                  <input 
                    id="front-width"
                    type="number" 
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full bg-[#142626] border border-white/10 p-4 text-white outline-none focus:border-[#0097b2] transition-all font-serif rounded-[10px]"
                    placeholder="Enter feet"
                  />
                </div>
                <div>
                  <label htmlFor="depth-side" className="block mb-2 text-[#A7B7B3] text-sm font-bold uppercase tracking-widest">Depth / Side (ft)</label>
                  <input 
                    id="depth-side"
                    type="number" 
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full bg-[#142626] border border-white/10 p-4 text-white outline-none focus:border-[#0097b2] transition-all font-serif rounded-[10px]"
                    placeholder="Enter feet"
                  />
                </div>
                <div>
                  <label htmlFor="rate-sq-yard" className="block mb-2 text-[#A7B7B3] text-sm font-bold uppercase tracking-widest">Rate per Sq. Yard (₹)</label>
                  <input 
                    id="rate-sq-yard"
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-[#142626] border border-white/10 p-4 text-white outline-none focus:border-[#0097b2] transition-all font-serif rounded-[10px]"
                    placeholder="Enter rate"
                  />
                </div>
                <button 
                  onClick={calculate}
                  className="w-full bg-[#0097b2] hover:bg-transparent border border-[#0097b2] text-white hover:text-[#0097b2] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0097b2] focus-visible:ring-offset-[#0E1A1A] outline-none py-4 font-bold uppercase tracking-widest transition-all mt-4 rounded-[10px]"
                >
                  Show Results
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#0097b2]/5 border border-[#0097b2]/20 p-10 text-center mb-6 rounded-[10px]">
                <h4 className="text-[12px] uppercase tracking-[4px] font-bold mb-4 text-[#0097b2]">Estimated Total Cost</h4>
                <h2 className="text-4xl md:text-5xl font-normal heading-serif text-[#F5F7F6]">
                  ₹ {results.totalCost.toLocaleString('en-IN')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Sq. Yards / Gaj', value: results.sqYards.toFixed(2) + ' yards / gaj' },
                  { label: 'Biswa', value: results.biswa.toFixed(2) + ' biswa' },
                  { label: 'Bigha', value: results.bigha.toFixed(3) + ' bigha' },
                  { label: 'Acres', value: results.acres.toFixed(5) + ' acres' }
                ].map((res, i) => (
                  <div key={i} className="bg-[#142626] p-4 text-[#A7B7B3] flex justify-between items-center text-sm italic font-serif rounded-[10px]">
                    {res.label}: <span className="text-[#C9A24D] font-bold not-italic font-sans">{res.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCalculator;