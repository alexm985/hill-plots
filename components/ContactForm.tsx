import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Residential Plot',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', interest: 'Residential Plot', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 bg-[#0E1A1A] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-[4px] mb-4 block">Inquiry</span>
          <h2 className="text-4xl md:text-5xl font-normal heading-serif text-[#F5F7F6] mb-4">Contact Our Experts</h2>
          <p className="text-[#A7B7B3] text-lg font-serif italic">Leave your details and we will get back to you within 24 hours.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8 bg-[#142626] p-8 md:p-12 border border-white/5 rounded-[10px] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-[11px] font-bold uppercase tracking-[3px] text-[#C9A24D] mb-3">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#0E1A1A] border border-white/10 p-4 text-[#F5F7F6] focus:outline-none focus:border-[#0097b2] transition-all font-serif placeholder-white/20 rounded-[10px]"
                placeholder="John Doe"
              />
            </div>
            <div className="group">
              <label className="block text-[11px] font-bold uppercase tracking-[3px] text-[#C9A24D] mb-3">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-[#0E1A1A] border border-white/10 p-4 text-[#F5F7F6] focus:outline-none focus:border-[#0097b2] transition-all font-serif placeholder-white/20 rounded-[10px]"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[3px] text-[#C9A24D] mb-3">Plot Interest</label>
            <div className="relative">
                <select
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
                className="w-full bg-[#0E1A1A] border border-white/10 p-4 text-[#F5F7F6] focus:outline-none focus:border-[#0097b2] transition-all appearance-none cursor-pointer font-serif rounded-[10px]"
                >
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Agricultural Land">Agricultural Land</option>
                    <option value="Commercial Space">Commercial Space</option>
                    <option value="Farm House">Farm House</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0097b2]">
                    <i className="fas fa-chevron-down text-xs"></i>
                </div>
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[3px] text-[#C9A24D] mb-3">Your Message</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-[#0E1A1A] border border-white/10 p-4 text-[#F5F7F6] focus:outline-none focus:border-[#0097b2] transition-all font-serif placeholder-white/20 resize-none rounded-[10px]"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full py-5 text-xs font-bold uppercase tracking-[3px] transition-all duration-500 shadow-xl rounded-[10px] ${
              status === 'success' 
                ? 'bg-[#0097b2] text-white cursor-default' 
                : 'bg-transparent border border-[#0097b2] text-[#0097b2] hover:bg-[#0097b2] hover:text-white'
            }`}
          >
            {status === 'submitting' ? (
                <i className="fas fa-circle-notch animate-spin text-lg"></i>
            ) : status === 'success' ? (
                <>
                  <i className="fas fa-check mr-2"></i> Inquiry Sent Successfully
                </>
            ) : 'Submit Inquiry'}
          </button>
        </form>
        
        <div className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-10">
                <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-lg"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-lg"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-[#A7B7B3] hover:text-[#0097b2] transition-colors text-lg"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="text-[#A7B7B3]/50 text-[10px] uppercase tracking-[2px]">© 2026 Hill Plots Dehradun. Transparent Himalayan Real Estate.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;