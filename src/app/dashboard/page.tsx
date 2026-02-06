"use client";

import React, { useState } from "react";

export default function ButlerPremiumDashboard() {
    const [userTier] = useState<'B' | 'S' | 'P'>('B');
    const [daysLeft] = useState(28);

    const isAccessible = (minTier: 'B' | 'S' | 'P') => {
        const priority = { 'B': 1, 'S': 2, 'P': 3 };
        return priority[userTier] >= priority[minTier];
    };

    return (
        <div className="flex min-h-screen bg-[#0a0b0d] text-gray-200 font-sans selection:bg-[#d4af37] selection:text-black">

            {/* 1. 사이드바: 2번 사진의 비례를 반영한 고정 레이아웃 */}
            <aside className="w-[320px] bg-[#0f1115] border-r border-white/5 flex flex-col p-12 fixed h-full z-50">
                <div className="mb-20">
                    <p className="text-[10px] text-gray-600 font-black tracking-[0.25em] mb-3 uppercase opacity-40">CrewWith</p>
                    <h1 className="text-2xl font-black text-white tracking-tighter italic">버틀러 에이전시</h1>
                </div>

                <nav className="flex-grow space-y-12">
                    {/* 정기 인사 모듈 */}
                    <div>
                        <p className="text-[11px] text-gray-500 font-black mb-6 px-2 uppercase tracking-[0.2em]">인사 관리 서비스</p>
                        <div className="space-y-3">
                            {[
                                { name: "대시보드", icon: "⊞", tier: 'B', active: true },
                                { name: "임직원 명부", icon: "👥", tier: 'B' },
                                { name: "표준 양식함", icon: "📁", tier: 'B' },
                                { name: "급여 관리 가이드", icon: "💰", tier: 'B' },
                            ].map((item) => (
                                <div key={item.name} className={`flex items-center gap-5 px-5 py-4 rounded-2xl transition-all cursor-pointer ${item.active ? "bg-white/5 text-[#d4af37]" : "text-gray-500 hover:text-white"}`}>
                                    <span className="text-lg opacity-80">{item.icon}</span>
                                    <span className="text-sm font-bold">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 확장형 특수 임무 (On-Demand) */}
                    <div>
                        <p className="text-[11px] text-[#d4af37] font-black mb-6 px-2 uppercase tracking-[0.2em] opacity-80">별도 요청 서비스</p>
                        <div className="space-y-3">
                            <div className="px-5 py-4 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-2xl cursor-pointer hover:bg-[#d4af37]/10 transition-all">
                                <p className="text-sm font-bold text-[#d4af37]">채용 대행 및 헤드헌팅</p>
                            </div>
                            <div className="px-5 py-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
                                <p className="text-sm font-bold text-gray-400">맞춤 평가 시스템 설계</p>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* 하단 프로필 섹션 */}
                <div className="mt-auto p-6 bg-white/[0.03] rounded-3xl border border-white/5">
                    <div className="flex items-center gap-5 mb-5">
                        <div className="w-12 h-12 bg-[#d4af37] rounded-2xl flex items-center justify-center font-black text-black text-xs italic shadow-lg shadow-yellow-900/20">CEO</div>
                        <div>
                            <p className="text-sm font-black text-white">이일성 대표님</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">베이직 등급</p>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-white/5 text-[11px] font-black rounded-xl border border-white/5 hover:bg-white/10 transition-all text-gray-400">설정 및 로그아웃</button>
                </div>
            </aside>

            {/* 2. 메인 컨텐츠 영역: p-24 패딩으로 압도적인 여백 확보 */}
            <main className="flex-1 ml-[320px] p-24 max-w-[1440px]">

                {/* 상단 헤더: 2번 사진의 정갈한 위계 재현 */}
                <header className="flex justify-between items-end mb-24">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            <p className="text-[12px] text-gray-500 font-bold tracking-widest uppercase">System Operational</p>
                        </div>
                        <h2 className="text-5xl font-black tracking-tight text-white italic underline underline-offset-[12px] decoration-[#d4af37]/20">인사 경영 대시보드</h2>
                    </div>
                    <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 px-8 py-5 rounded-[2rem] text-right shadow-2xl">
                        <p className="text-[11px] text-[#d4af37] font-black uppercase mb-1 tracking-widest opacity-60">보안 금고 보관 기간</p>
                        <p className="text-2xl font-black text-[#d4af37]">D-{daysLeft} <span className="text-sm font-normal ml-1">일 남음</span></p>
                    </div>
                </header>

                {/* 3. 위젯 레이아웃: gap-12로 정보 간의 숨구멍을 뚫음 */}
                <div className="flex flex-col gap-24">

                    {/* [섹션 1] 주요 지표 및 진행 상황 */}
                    <section className="grid grid-cols-12 gap-12 items-stretch">

                        {/* 인사 안정 지수: 2번 사진의 Runway 위젯 비례 */}
                        <div className="col-span-5 bg-gradient-to-br from-[#1c1e26] to-[#0a0b0d] border border-white/10 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 text-5xl italic font-black text-blue-500 uppercase">Status</div>
                            <p className="text-xs font-black text-blue-500 mb-12 uppercase tracking-[0.3em] flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full" /> 인사 관리 안정도
                            </p>
                            <div className="flex items-baseline gap-4 mb-10">
                                <span className="text-9xl font-black tracking-tighter italic text-white group-hover:scale-105 transition-transform duration-700">82.0</span>
                                <span className="text-3xl font-bold text-gray-700 italic">점</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-12">
                                <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-[82%]" />
                            </div>
                            <p className="text-base text-gray-500 leading-relaxed font-medium">대표님, 기초 서류 분석 결과 현재 <span className="text-white font-bold italic">필수 서류 9종이 안전하게 보관</span> 중입니다.</p>
                        </div>

                        {/* 우선 조치 사항: 2번 사진의 Action Required 비례 */}
                        <div className="col-span-7 bg-[#16181d] border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between shadow-xl">
                            <div className="flex justify-between items-center mb-12">
                                <h4 className="text-2xl font-black text-white italic tracking-tight">버틀러 점검 알림</h4>
                                <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full font-black uppercase tracking-widest border border-yellow-500/20">Action Required</span>
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-center gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/5 transition-all cursor-pointer">
                                    <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center text-2xl shadow-inner">📜</div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-100">법정 의무 교육 미이수</p>
                                        <p className="text-sm text-gray-500 mt-2 italic">2026년 전 임직원 대상 성희롱 예방 교육 가이드 확인이 필요합니다.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/5 transition-all cursor-pointer">
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-2xl shadow-inner">👥</div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-100">인사 DB 정보 보완</p>
                                        <p className="text-sm text-gray-500 mt-2 italic">신규 입사자 2인의 비상 연락처 정보가 누락되어 있습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* [섹션 2] 실무 가이드: 넉넉한 그리드 간격 */}
                    <section>
                        <p className="text-[12px] text-gray-600 font-black mb-10 uppercase tracking-[0.4em] flex items-center gap-5 italic">
                            <span className="w-12 h-px bg-white/10" /> 버틀러 실무 지식 베이스
                        </p>
                        <div className="grid grid-cols-3 gap-12">
                            {[
                                { title: "조직도 설계", desc: "스타트업 표준 호칭 및 R&R 가이드라인", tag: "Guide" },
                                { title: "채용 가이드", desc: "직군별 채용 공고 배포 및 표준 JD 템플릿", tag: "Template" },
                                { title: "급여 정산 가이드", desc: "기초 급여 계산 및 4대 보험 실무법", tag: "HR Basic" },
                            ].map((item) => (
                                <div key={item.title} className="bg-[#16181d] border border-white/5 p-12 rounded-[3rem] hover:bg-white/5 transition-all group relative">
                                    <span className="text-[9px] font-black text-[#d4af37] border border-[#d4af37]/30 px-3 py-1.5 rounded-full uppercase mb-8 inline-block tracking-widest">{item.tag}</span>
                                    <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-10 italic">{item.desc}</p>
                                    <button className="text-[11px] font-black text-[#d4af37] uppercase tracking-[0.2em] border-b-2 border-[#d4af37]/30 pb-1.5 hover:border-[#d4af37] transition-all">가이드 열람 →</button>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            {/* 푸터: 2번 사진처럼 최하단 우측에 최소한으로 배치 */}
            <footer className="fixed bottom-0 right-0 p-12 opacity-10 text-[11px] font-bold tracking-[0.5em] pointer-events-none uppercase italic">
                Butler Agency Strategic Hub © 2026
            </footer>
        </div>
    );
}
