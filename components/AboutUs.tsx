
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0E1A1A]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-[4px] mb-2 block">Values & Commitment</span>
              <h2 className="text-4xl md:text-5xl font-normal heading-serif mb-4 text-[#F5F7F6]">Our Ethos</h2>
              <div className="w-16 h-[3px] bg-[#0097b2]"></div>
            </div>
            
            <div className="text-lg md:text-xl leading-[1.8] text-[#A7B7B3] font-serif italic">
              At Hill Plots, we focus exclusively on premium residential and investment plots in the Bhauwala belt on the outskirts of Dehradun, Uttarakhand. All the plots we list belong to our group of shareholders, ensuring complete trust and transparency in every transaction.
              <br /><br />
              We do not charge any brokerage or commission. Each site we offer is carefully selected for its location advantages, accessibility, and long-term value. We strongly encourage you to visit the sites in person to understand the beauty, environment, and growth potential of the area.
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col border-l border-[#0097b2]/30 pl-6">
                    <span className="text-[#C9A24D] text-xs uppercase tracking-[3px] font-bold mb-2">Transparency</span>
                    <p className="text-[#A7B7B3] text-sm leading-relaxed">Direct ownership documents provided upfront for independent legal verification.</p>
                </div>
                <div className="flex flex-col border-l border-[#0097b2]/30 pl-6">
                    <span className="text-[#C9A24D] text-xs uppercase tracking-[3px] font-bold mb-2">Zero Brokerage</span>
                    <p className="text-[#A7B7B3] text-sm leading-relaxed">Deal directly with the stakeholders. No middleman markups or hidden fees.</p>
                </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 border border-[#0097b2]/20 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 rounded-[10px]"></div>
            <div className="relative z-10 overflow-hidden rounded-[10px] shadow-2xl">
              <img 
                src="https://hill.digweblance.com/assets/image/hillplots-1.jpg" 
                alt="Premium Plots in Dehradun - Hill Plots Ethos" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to high-quality stock if link fails
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0E1A1A]/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0097b2] p-6 hidden md:block z-20 shadow-xl rounded-[10px]">
              <span className="text-white font-bold text-3xl block">Direct</span>
              <span className="text-white/80 text-[10px] uppercase tracking-widest font-bold">Ownership Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
