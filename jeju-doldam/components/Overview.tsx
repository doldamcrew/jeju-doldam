
import React from 'react';

export const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-24 md:py-40 px-6 md:px-12 bg-black border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-brand-mint/10 border border-brand-mint/20 text-brand-mint text-xs font-black tracking-widest uppercase mb-6">
              01 Company Overview
            </div>
            <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-8">
              제주 돌담,<br/>
              현장체험학습<br/>
              <span className="text-brand-mint">안전관리 전문</span> 기업
            </h3>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
              제주 돌담은 <span className="text-white font-bold bg-white/10 px-2 py-1">사고 예방 중심의 구조적 안전 운영 시스템</span>을 통해<br className="hidden md:block"/> 
              가장 안전한 현장체험을 만듭니다.
            </p>
            <div className="space-y-1">
              {[
                { label: "회 사 명", value: "제주 돌담" },
                { label: "소 재 지", value: "제주시 한라대학로 86, 301호" },
                { label: "이 메 일", value: "safety_ddcrew@naver.com" },
                { label: "연 락 처", value: "010-4787-8272" },
              ].map((item, idx) => (
                <div key={idx} className="flex py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors px-4 -mx-4">
                  <span className="w-24 text-zinc-500 font-bold text-sm tracking-widest">{item.label}</span>
                  <span className="text-white font-medium text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative group">
             <div className="aspect-square bg-zinc-900 overflow-hidden">
                <img 
                  src="https://postfiles.pstatic.net/MjAyNjAyMDFfMjA5/MDAxNzY5OTMxMjA4NDAw.OsY_2Ly2a9JQB4rStb8SQBTvh_WM4cTak3i0qN_mMU8g.140sJuc-qpcE0B_aqwFNobh4hE5EXPHP1lsEb8Ui9MUg.PNG/%EC%95%88%EC%A0%84%EC%9A%94%EC%9B%90_%EC%9D%B4%EB%AF%B8%EC%A7%80.png?type=w966" 
                  alt="Doldam Team" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             </div>
             <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-brand-mint p-8 md:p-12 shadow-2xl">
                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-black/60 mb-2">Safety Standard</p>
                <p className="text-2xl md:text-4xl font-black text-black leading-none">NO<br/>ACCIDENTS</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
