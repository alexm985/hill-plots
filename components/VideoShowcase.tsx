import React from 'react';

const videos = [
  { id: 'BrX-LaAqDCA', title: 'Budget farmhouse plot Dehradun' },
  { id: 'n0Jg6pXijEc', title: '14 Bigha Green Land Parcel Dehradun' },
  { id: 'Bb00LfL3zwI', title: 'Budget Colony Plot Near Dehradun' }
];

const VideoShowcase: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Dark Overlay to match screenshot aesthetics */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-[#0E1A1A]/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-normal heading-serif text-white mb-6 drop-shadow-lg">
            Have a look at the following videos of our plots.
          </h2>
          <div className="w-24 h-[1px] bg-[#0097b2] mx-auto opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group relative rounded-[10px] overflow-hidden border-[6px] border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#0097b2]/50 hover:-translate-y-2 bg-black"
            >
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Title overlay similar to the screenshot interface */}
              <div className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
                <div className="flex items-center">
                  <div className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center mr-3 border border-white/10">
                    <span className="text-[9px] font-bold text-[#0097b2]">HP</span>
                  </div>
                  <p className="text-white text-[11px] font-bold truncate drop-shadow-md tracking-wide">
                    {video.title}
                  </p>
                </div>
              </div>

              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-[8px] border border-white/5 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#A7B7B3] font-serif italic text-sm opacity-50 tracking-wider">
            Site surveys recorded at actual locations in Bhauwala Belt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;