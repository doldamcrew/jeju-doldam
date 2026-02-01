
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        <div className="flex flex-col space-y-6 w-full md:w-auto">
          <div className="flex items-start -ml-12 md:-ml-24">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAyMDFfMTQz/MDAxNzY5OTM0MzE1ODMy.tbQzgUROL1jC1isF9RsAxXsZOUR9SVCXoLV7ZpQCd74g.r_3p4Q-eEdS4JEGwMoIsnMKXeUZLf_Y5uNfk1dJj1GEg.PNG/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94._(3).png?type=w966" 
              alt="제주 돌담" 
              className="h-28 md:h-36 w-auto object-contain transition-all duration-300 opacity-90"
              style={{ 
                filter: 'url(#remove-black-background) contrast(1.2) brightness(1.2)',
                imageRendering: 'auto'
              }}
            />
          </div>
          <div className="pl-0">
            <p className="text-sm text-zinc-500 max-w-sm font-medium leading-relaxed">
              행정과 현장을 이해하는 전문 파트너. <br/>
              아이들의 꿈과 미소를 지키는 제주 돌담입니다.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-16 md:gap-24 text-xs font-black uppercase tracking-[0.2em] pt-4">
          <div>
             <h5 className="text-brand-mint mb-6">Explore</h5>
             <ul className="space-y-4 text-zinc-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Safety Protocol</li>
             </ul>
          </div>
          <div>
             <h5 className="text-brand-mint mb-6">Connect</h5>
             <ul className="space-y-4 text-zinc-400">
                <li className="hover:text-white transition-colors cursor-pointer">Naver Form</li>
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
             </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-zinc-600 font-bold uppercase tracking-[0.5em] relative z-10">
         <p>© 2026 JEJU DOLDAM. ALL RIGHTS RESERVED.</p>
         <p className="mt-4 md:mt-0">제주시 한라대학로 86, 301호 | 010-4787-8272</p>
      </div>
    </footer>
  );
};
