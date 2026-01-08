import React, { useState } from 'react';

const faqData = [
  {
    question: "Do you charge any brokerage or commission?",
    answer: "No. We do not take any brokerage or commission because all plots are from our own inventory. This ensures complete transparency and genuine pricing."
  },
  {
    question: "Can outsiders (non-residents of Uttarakhand) buy land here?",
    answer: "Yes. Uttarakhand is the only Himalayan state that allows non-residents to purchase up to 300 sq. yards in rural areas, making it investment-friendly for buyers from outside the state."
  },
  {
    question: "Should I always do a physical site visit?",
    answer: "Yes. A site visit helps you understand the surroundings, water availability, air quality, neighbourhood, and the real feel of the land."
  },
  {
    question: "What is the booking and payment process?",
    answer: "A token amount of ₹51,000 is required to begin document verification. After verification, buyers pay 33% to secure the plot and receive 2–3 months to arrange the remaining 67%. Registration is done at Vikasnagar Tehsil Court."
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes. If the buyer chooses to complete the full payment within 2 weeks from Start to Finish, we offer a special early-payment discount as a gesture of appreciation."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0E1A1A] border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-[4px] mb-2 block">Clarification</span>
            <h2 className="text-3xl md:text-5xl font-normal heading-serif leading-tight">
              Frequently Asked Questions <br />
              <span className="text-[#0097b2]">(FAQ)</span>
            </h2>
            <div className="w-16 h-[3px] bg-[#C9A24D] mt-6"></div>
            <p className="text-[#A7B7B3] mt-8 font-serif italic text-lg max-w-sm">
              Detailed answers to technical and procedural inquiries about land acquisition in the Bhauwala belt.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`transition-all duration-300 rounded-[10px] border ${
                  openIndex === index 
                  ? 'bg-[#142626] border-[#0097b2]/50 shadow-[0_0_20px_rgba(0,151,178,0.1)]' 
                  : 'bg-[#142626]/50 border-white/5 hover:border-white/10'
                }`}
              >
                <button 
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full border mr-5 transition-all duration-300 ${
                      openIndex === index 
                      ? 'bg-[#0097b2] border-[#0097b2] text-white rotate-180' 
                      : 'border-[#0097b2]/30 text-[#0097b2] group-hover:border-[#0097b2]'
                    }`}>
                      {openIndex === index ? (
                        <i className="fas fa-minus text-[10px]"></i>
                      ) : (
                        <i className="fas fa-plus text-[10px]"></i>
                      )}
                    </span>
                    <span className={`text-lg md:text-xl font-normal transition-colors duration-300 ${openIndex === index ? 'text-[#F5F7F6]' : 'text-[#A7B7B3] group-hover:text-[#F5F7F6]'}`}>
                      {item.question}
                    </span>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-8 ml-14 text-[#A7B7B3] font-serif leading-relaxed text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;