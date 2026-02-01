
import React from 'react';
import { AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-500 mb-4 tracking-tight">우리 아이들의 안전, <span className="text-white underline decoration-brand-mint decoration-4">확률</span>에 맡기시겠습니까?</h3>
        <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
          Verified Professionals Only
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="bg-zinc-900/50 p-10 border border-white/5 rounded-2xl">
          <div className="flex items-center space-x-3 text-zinc-500 mb-10">
            <AlertTriangle size={18} className="text-brand-mint" />
            <span className="font-bold text-xs uppercase tracking-[0.3em]">Current Issues</span>
          </div>
          <div className="space-y-8">
            <div className="group">
               <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-mint transition-colors">무자격 알바 고용 만연</h4>
               <p className="text-zinc-500 text-sm leading-relaxed">성수기 인력 부족으로 검증되지 않은 단기 알바생 투입으로 인한 사고 위험 노출</p>
            </div>
            <div className="group">
               <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-mint transition-colors">학교 측 불안감 증대</h4>
               <p className="text-zinc-500 text-sm leading-relaxed">신원 확인 불분명 및 사고 발생 시 책임 회피 우려로 인한 행정적 부담 가중</p>
            </div>
          </div>
        </div>
        <div className="bg-brand-mint p-10 rounded-2xl shadow-[0_0_50px_rgba(0,245,212,0.15)] text-black">
          <div className="flex items-center space-x-3 text-black/60 mb-10">
            <ShieldCheck size={18} />
            <span className="font-bold text-xs uppercase tracking-[0.3em]">The Doldam Solution</span>
          </div>
          <div className="space-y-8">
            <div>
               <h4 className="text-2xl font-black mb-2">현지 전문가 & 법령 준수</h4>
               <p className="text-black/70 text-sm font-medium leading-relaxed">제주 지형을 완벽히 파악한 베테랑 현지 전문가 배치 및 교육청 지침 100% 준수</p>
            </div>
            <div>
               <h4 className="text-2xl font-black mb-2">책임 안전 보장</h4>
               <p className="text-black/70 text-sm font-medium leading-relaxed">구조적 안전 시스템을 통한 확실한 사고 예방 및 응급상황 발생 시 즉각 대처</p>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-black/10 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest">Structural Safety First</span>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96