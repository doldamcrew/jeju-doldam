
import React from 'react';
import { Calendar, Sun, Moon, Search, ShieldCheck, Map, Zap, CheckCircle } from 'lucide-react';

export const Procedure: React.FC = () => {
  const tacticalSteps = [
    { icon: <Search size={20} />, title: "사전정보 공유", desc: "운영 일정 정보 기반 방문 장소 확인" },
    { icon: <Map size={20} />, title: "위험요소 인지", desc: "지형, 기상 조건, 혼잡 구간 사전 대비" },
    { icon: <ShieldCheck size={20} />, title: "구간별 배치", desc: "현장 상황별 전담 인력 탄력 배치" },
    { icon: <Zap size={20} />, title: "즉각 대응", desc: "이상 상황 발생 시 비상 보고 및 조치" }
  ];

  return (
    <section id="procedure" className="py-24 md:py-40 px-6 md:px-12 bg-black overflow-hidden relative scroll-mt-24">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
           <div className="text-brand-mint font-black text-xs tracking-[0.5em] uppercase mb-4">03 Operating Procedure</div>
           <h3 className="text-5xl md:text-8xl font-black leading-none italic tracking-tighter uppercase mb-10">
             24H Safe Care
           </h3>
           <p className="text-zinc-500 text-lg font-bold">공항 픽업부터 돌아가는 그 순간까지, 빈틈없는 안심 케어를 제공합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-32 border border-white/5 overflow-hidden">
           <div className="bg-zinc-950 p-12 hover:bg-zinc-900 transition-colors">
              <div className="mb-8">
                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Phase 01</span>
              </div>
              <Calendar className="text-brand-mint mb-6" size={32} />
              <h4 className="text-2xl font-bold mb-6">사전 행정 지원</h4>
              <ul className="space-y-4 text-zinc-500">
                 <li className="flex items-start text-sm"><CheckCircle size={14} className="text-brand-mint mr-3 mt-1 shrink-0" /> 필수 서류 신속 제출 (자격증, 신원조회 등)</li>
                 <li className="flex items-start text-sm"><CheckCircle size={14} className="text-brand-mint mr-3 mt-1 shrink-0" /> 위험요소 사전 브리핑 및 맞춤형 계획 수립</li>
              </ul>
           </div>

           <div className="bg-zinc-950 p-12 hover:bg-zinc-900 transition-colors">
              <div className="mb-8">
                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Phase 02</span>
              </div>
              <Sun className="text-brand-mint mb-6" size={32} />
              <h4 className="text-2xl font-bold mb-6">주간 활동 케어</h4>
              <ul className="space-y-4 text-zinc-500">
                 <li className="flex items-start text-sm"><CheckCircle size={14} className="text-brand-mint mr-3 mt-1 shrink-0" /> 이동 및 차량 안전 (인원체크, 승하차 지도)</li>
                 <li className="flex items-start text-sm"><CheckCircle size={14} className="text-brand-mint mr-3 mt-1 shrink-0" /> 체험 활동 밀착 관리 (낙상 방지, 위험구역 통제)</li>
              </ul>
           </div>

           <div className="bg-zinc-950 p-12 hover:bg-zinc-900 transition-colors relative group overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-cover bg-center"
                style={{ backgroundImage: 'url("https://postfiles.pstatic.net/MjAyNjAyMDFfOTAg/MDAxNzY5OTMxMjA4ODA3.Jvf2Wsjup_KEBy_Lhg6eopgP0f_tEsj8snwL4sXmPegg.TrmjdqhNKBYZNBFQ-9amQtLiXL5xSboz-gWJLKVG3Osg.PNG/%EC%95%88%EC%A0%84%EC%9A%94%EC%9B%90_%EC%9D%B4%EB%AF%B8%EC%A7%802.png?type=w966")' }}
              ></div>
              <div className="relative z-10">
                <div className="mb-8">
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Phase 03</span>
                </div>
                <Moon className="text-brand-mint mb-6" size={32} />
                <h4 className="text-2xl font-bold mb-6 text-brand-mint">야간 생활 지도</h4>
                <ul className="space-y-4 text-zinc-300">
                   <li className="flex items-start text-sm"><CheckCircle size={14} className="text-brand-mint mr-3 mt-1 shrink-0" /> 심야 외부인 침입 차단 및 화재 예방 순찰</li>
                   <li className="flex items-start text-sm"><CheckCircle size={14} className="text-brand-mint mr-3 mt-1 shrink-0" /> 일탈 행위 통제 (음주/흡연/소음/이탈 관리)</li>
                </ul>
              </div>
           </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-0 md:top-10 w-px md:w-full h-full md:h-px bg-white/10 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {tacticalSteps.map((item, idx) => (
              <div key={idx} className="flex md:flex-col items-start md:items-center text-left md:text-center group">
                <div className="relative mb-0 md:mb-10 mr-6 md:mr-0">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-brand-mint group-hover:border-brand-mint group-hover:bg-brand-mint group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-brand-mint text-black text-[10px] font-black px-2 py-0.5 rounded-full">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg mb-2 group-hover:text-brand-mint transition-colors">{item.title}</h5>
                  <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold tracking-tighter max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30rem] font-black opacity-[0.01] pointer-events-none select-none italic whitespace-nowrap">
        STRUCTURAL SAFETY
      </div>
    </section>
  );
};
