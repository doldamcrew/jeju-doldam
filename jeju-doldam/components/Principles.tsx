
import React from 'react';

export const Principles: React.FC = () => {
  const principles = [
    {
      title: "CERTIFIED",
      desc: "100% 자격기준 준수",
      detail: "응급구조사, 간호사, 소방, 경찰 등\n국가공인 자격 보유자 100% 배치"
    },
    {
      title: "CUSTOM",
      desc: "현장 맞춤형 관리",
      detail: "이동, 집결, 체험 구간별 실제 현장\n데이터에 기반한 정밀 안전계획 수립"
    },
    {
      title: "STABLE",
      desc: "상시 인력풀 운영",
      detail: "단기 모집이 아닌 상시 인력 관리\n체계를 통해 일관된 서비스 품질 보장"
    },
    {
      title: "TRUST",
      desc: "투명한 전문 행정",
      detail: "100% 실사본 서류 증빙 및 검증된 인력 배치를 통한 학교 신뢰도 제고"
    }
  ];

  return (
    <section id="principles" className="py-24 md:py-40 px-6 md:px-12 bg-black scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="max-w-xl">
             <div className="text-brand-mint font-black text-xs tracking-[0.5em] uppercase mb-4">02 Operating Principles</div>
             <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none">THE CORE PRINCIPLES</h2>
           </div>
           <div className="text-zinc-600 font-mono text-sm max-w-xs text-right whitespace-pre-line">
             SAFETY IS NOT JUST A WORD,{"\n"}IT'S OUR STRUCTURAL COMMITMENT.
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {principles.map((p, i) => (
             <div key={i} className="group p-10 bg-zinc-900/30 border border-white/5 hover:border-brand-mint/40 transition-all duration-500">
                <div className="text-brand-mint font-black text-4xl mb-12 opacity-20 group-hover:opacity-100 transition-opacity">
                   {p.title}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{p.desc}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line">{p.detail}</p>
             </div>
           ))}
        </div>

        <div className="mt-24 text-center border-y border-white/5 py-16">
           <h4 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter mb-4 uppercase">
             <span className="text-brand-mint">Quality</span> over Quantity
           </h4>
           <p className="text-zinc-500 text-lg uppercase tracking-widest font-bold">인력의 '수'보다 중요한 것은 <span className="text-brand-mint">'질'</span>입니다.</p>
        </div>
      </div>
    </section>
  );
};
