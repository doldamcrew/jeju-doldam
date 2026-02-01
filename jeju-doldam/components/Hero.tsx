
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: 'url("https://postfiles.pstatic.net/MjAyNjAyMDFfOTAg/MDAxNzY5OTMxMjA4ODA3.Jvf2Wsjup_KEBy_Lhg6eopgP0f_tEsj8snwL4sXmPegg.TrmjdqhNKBYZNBFQ-9amQtLiXL5xSboz-gWJLKVG3Osg.PNG/%EC%95%88%EC%A0%84%EC%9A%94%EC%9B%90_%EC%9D%B4%EB%AF%B8%EC%A7%802.png?type=w966")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black"></div>

      <div className="relative z-10 text-center px-4 max-w-7xl flex flex-col items-center">
        <h2 className="text-xl md:text-3xl font-medium text-brand-mint mb-6 tracking-tight">
          행정과 현장을 이해하는 안전 파트너,
        </h2>
        <div className="mb-8">
          <span className="inline-block text-sm md:text-base font-bold not-italic border border-white/20 rounded-full px-6 py-2 uppercase tracking-[0.5em] text-white/90 bg-white/5 backdrop-blur-sm">
            Safety Crew
          </span>
        </div>
        <h1 className="text-7xl md:text-[11rem] font-black leading-none tracking-tighter mb-10 italic uppercase">
          제주 돌담
        </h1>
        <p className="text-lg md:text-2xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed text-center">
          현장체험학습 주야간 안전요원 전문업체. <br className="hidden md:block"/>
          <span className="text-white font-bold underline decoration-brand-mint underline-offset-8">안전</span>은 타협할 수 없는 돌담의 유일한 원칙입니다.
        </p>
      </div>

      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold">
        <div className="mb-4 md:mb-0">TRUSTED SAFETY SYSTEM</div>
        <div className="flex space-x-10">
            <span className="text-white">Professional</span>
            <span>Transparent</span>
            <span className="text-white">Structural</span>
        </div>
        <div className="hidden md:block">EST. 2026 © JEJU DOLDAM</div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-brand-mint to-transparent mx-auto"></div>
      </div>
    </section>
  );
};
