
import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xkozgqwr", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="relative z-10">
            <div className="text-brand-mint font-black text-xs tracking-[0.5em] uppercase mb-6">Contact Us</div>
            <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 italic uppercase leading-none">
              Let's <span className="text-brand-mint">Keep</span> <br/>Them <span className="text-brand-mint">Safe</span>.
            </h3>
            <div className="space-y-10">
              <div className="group cursor-pointer flex items-center space-x-6">
                 <div className="w-16 h-16 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-brand-mint group-hover:text-black transition-all">
                    <Phone size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">24/7 Phone</p>
                    <p className="text-3xl font-black text-white tracking-tight">010-4787-8272</p>
                 </div>
              </div>
              <div className="group cursor-pointer flex items-center space-x-6">
                 <div className="w-16 h-16 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-brand-mint group-hover:text-black transition-all">
                    <Mail size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Email Inquiry</p>
                    <p className="text-xl font-bold text-white tracking-tight">safety_ddcrew@naver.com</p>
                 </div>
              </div>
              <div className="flex items-center space-x-6">
                 <div className="w-16 h-16 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-zinc-500">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Office Location</p>
                    <p className="text-lg font-medium text-white">제주시 한라대학로 86, 301호</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 bg-zinc-950 p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col justify-center">
             {status === 'success' ? (
               <div className="text-center py-10">
                  <div className="w-20 h-20 bg-brand-mint/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={40} className="text-brand-mint" />
                  </div>
                  <h4 className="text-3xl font-black text-white italic uppercase mb-4">Thank You!</h4>
                  <p className="text-zinc-500 mb-10 leading-relaxed">상담 신청이 정상적으로 접수되었습니다.<br/>담당자가 신속하게 연락드리겠습니다.</p>
                  <button onClick={() => setStatus('idle')} className="px-8 py-3 border border-white/20 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Back to Form</button>
               </div>
             ) : (
               <>
                 <div className="mb-8 border-b border-white/5 pb-8">
                    <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">Request a Quote</h4>
                    <p className="text-zinc-500 text-sm font-medium">필요하신 서비스 내용을 남겨주시면 담당자가 신속히 연락드립니다.</p>
                 </div>
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Name / Manager</label>
                          <input type="text" name="manager_name" required disabled={status === 'submitting'} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-mint transition-colors font-medium disabled:opacity-50" placeholder="성함/담당자명" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Organization</label>
                          <input type="text" name="organization" required disabled={status === 'submitting'} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-mint transition-colors font-medium disabled:opacity-50" placeholder="학교명/단체명" />
                       </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Phone Number</label>
                          <input type="tel" name="phone" required disabled={status === 'submitting'} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-mint transition-colors font-medium disabled:opacity-50" placeholder="010-0000-0000" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Service Type</label>
                          <select name="service_type" disabled={status === 'submitting'} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-mint transition-colors font-medium appearance-none disabled:opacity-50">
                             <option value="daytime">주간 안전관리</option>
                             <option value="nighttime">야간 생활지도</option>
                             <option value="full-day">전일 안심케어 (주/야)</option>
                             <option value="etc">기타 문의</option>
                          </select>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Inquiry Details</label>
                       <textarea name="message" rows={4} required disabled={status === 'submitting'} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-mint transition-colors font-medium resize-none disabled:opacity-50" placeholder="체험 일정, 예상 인원 등 구체적인 내용을 작성해주세요."></textarea>
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center space-x-2 text-red-500 text-xs font-bold bg-red-500/10 p-4 rounded border border-red-500/20">
                        <AlertCircle size={14} />
                        <span>전송 중 오류가 발생했습니다. 다시 시도해 주세요.</span>
                      </div>
                    )}
                    <button type="submit" disabled={status === 'submitting'} className="w-full py-5 bg-brand-mint text-black font-black text-xl uppercase tracking-tighter italic flex items-center justify-center hover:bg-white transition-all group disabled:bg-zinc-800 disabled:text-zinc-500">
                      {status === 'submitting' ? (
                        <>전송 중... <Loader2 className="ml-4 animate-spin" /></>
                      ) : (
                        <>보내기 <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" /></>
                      )}
                    </button>
                 </form>
               </>
             )}
             <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-mint/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-black opacity-[0.02] pointer-events-none select-none italic whitespace-nowrap z-0">
        INQUIRY
      </div>
    </section>
  );
};
