
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[1001] flex items-center">
        <a 
            href="https://wa.me/917017714385" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full"
            aria-label="Chat with us on WhatsApp"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-focus-visible:scale-110"></div>
            <div className="bg-[#25D366] w-[60px] h-[60px] rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-focus-visible:scale-110 active:scale-95 z-10 relative animate-bounce-custom">
                <i className="fab fa-whatsapp text-3xl" aria-hidden="true"></i>
                <div className="absolute right-[75px] bg-white text-[#333] px-4 py-2 rounded-[10px] shadow-xl text-xs whitespace-nowrap opacity-0 translate-x-4 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 hidden md:block font-bold" aria-hidden="true">
                    Chat with us
                </div>
            </div>
        </a>
    </div>
  );
};

export default WhatsAppButton;
