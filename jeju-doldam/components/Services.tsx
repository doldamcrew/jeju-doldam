
import React from 'react';
import { Shield, Users, Clock, MapPin } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-10 h-10 mb-4 text-orange-500" />,
    title: "안전 요원 파견",
    description: "국가공인 자격 및 현장 경력이 풍부한 베테랑 안전요원이 현장체험학습의 모든 여정을 함께합니다."
  },
  {
    icon: <Users className="w-10 h-10 mb-4 text-orange-500" />,
    title: "단체 관리 서비스",
    description: "대규모 인원 이동 시 돌발 상황 방지 및 체계적인 대열 관리로 질서 있는 활동을 보장합니다."
  },
  {
    icon: <MapPin className="w-10 h-10 mb-4 text-orange-500" />,
    title: "코스별 위험 분석",
    description: "제주도 내 주요 관광지 및 산책로의 지형적 특성을 고려한 맞춤형 안전 가이드를 제공합니다."
  },
  {
    icon: <Clock className="w-10 h-10 mb-4 text-orange-500" />,
    title: "24시 비상 대기",
    description: "사고 발생 시 즉각적인 초동 조치와 전문 의료진/관공서 연계 시스템을 가동합니다."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-6 md:px-12 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-orange-500 mb-6">Our Services</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">최고의 전문가들이<br/>완벽한 안전을 선사합니다.</h3>
          </div>
          <p className="text-zinc-500 font-mono text-sm max-w-xs md:text-right">
            EVERY PROJECT IS HANDLED WITH PRECISION AND EXCELLENCE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-zinc-900/50 hover:bg-zinc-900 transition-all border border-zinc-800 hover:border-orange-500/50">
              {service.icon}
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
