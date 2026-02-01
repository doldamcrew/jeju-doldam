
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 py-4 md:py-6 ${
          scrolled || isOpen ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center group">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAyMDFfNDEg/MDAxNzY5OTMzNDI4NTkw.r_HFkQdlIvN-4mu4hA1gmJOoGfHABhHf94OADU58GC4g.FVF2juniSSRLdFhkVu5KZErrg7PLU2bL-jykyuZmDcMg.PNG/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94..png?type=w966" 
              alt="제주 돌담" 
              className="h-14 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              style={{ 
                filter: 'url(#remove-black-background) contrast(1.4) brightness(1.2) saturate(1.1) drop-shadow(0 0 1px rgba(255,255,255,0.1))',
                imageRendering: 'auto'
              }}
            />
          </a>

          <div className="hidden md:flex space-x-12 text-xs font-bold tracking-widest uppercase items-center">
            <button onClick={(e) => scrollToSection(e, 'overview')} className="text-white hover:text-brand-mint transition-colors">Company</button>
            <button onClick={(e) => scrollToSection(e, 'principles')} className="text-white hover:text-brand-mint transition-colors">Principle</button>
            <button onClick={(e) => scrollToSection(e, 'procedure')} className="text-white hover:text-brand-mint transition-colors">Process</button>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-5 py-2 border border-white text-white hover:bg-brand-mint hover:border-brand-mint hover:text-black transition-all"
            >
              Inquiry
            </button>
          </div>

          <div className="md:hidden relative z-[110]">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center space-y-10 text-4xl font-black uppercase tracking-tighter transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button onClick={(e) => scrollToSection(e, 'overview')} className="text-white hover:text-brand-mint italic">Company</button>
        <button onClick={(e) => scrollToSection(e, 'principles')} className="text-white hover:text-brand-mint italic">Principle</button>
        <button onClick={(e) => scrollToSection(e, 'procedure')} className="text-white hover:text-brand-mint italic">Process</button>
        <button onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-brand-mint italic">Contact</button>
        <div className="pt-10 flex flex-col items-center">
           <div className="w-12 h-px bg-brand-mint mb-6"></div>
           <p className="text-[10px] tracking-[0.5em] text-zinc-600 font-bold">JEJU DOLDAM SAFETY</p>
        </div>
      </div>
    </>
  );
};
