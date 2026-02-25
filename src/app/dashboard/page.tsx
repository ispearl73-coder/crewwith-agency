"use client";

import React from "react";

export default function ButlerPremiumDashboard() {
  return (
    // [전체 틀] 배경색을 차분한 그레이로 고정하고, 화면을 좌우로 나눕니다.
    <div className="flex h-screen w-full bg-[#f4f7fa] text-[#1a1a1a] overflow-hidden">

      {/* 1. [좌측 메뉴] 260px 고정, 깊이감 있는 블랙/골드 테마 */}
      <aside className="w-[260px] bg-[#0f1115] flex flex-col flex-shrink-0 shadow-2xl border-r border-white/5">
        <div className="p-8 border-b border-white/5">
          <p className="text-[10px] text-[#d4af37] font-black tracking-[0.2em] mb-1 uppercase opacity-80">Crewwith</p>
          <h1 className="text-xl font-black text-[#facc15] tracking-tighter italic drop-shadow-sm">버틀러 에이전시</h1>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-8 overflow-y-auto">
          {/* SUMMARY */}
          <div className="space-y-2">
            <p className="px-4 text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest mb-2">SUMMARY</p>
            <div className="flex items-center gap-4 px-4 py-3 bg-[#d4af37] text-black rounded-sm cursor-pointer shadow-sm">
              <span className="text-sm font-bold">집무실 홈</span>
            </div>
          </div>

          {/* Core Operations (HR) */}
          <div className="space-y-2">
            <p className="px-4 text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest mb-2 mt-6">CORE OPERATIONS (HR)</p>
            <div className="flex items-center gap-4 px-4 py-3 text-[#fef08a] hover:bg-[#d4af37]/10 rounded-sm cursor-pointer transition-all">
              <span className="text-sm font-medium">식구 명부 (임직원 명부)</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-3 text-[#fef08a] hover:bg-[#d4af37]/10 rounded-sm cursor-pointer transition-all">
              <span className="text-sm font-medium">표준 양식함</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-3 text-[#fef08a] hover:bg-[#d4af37]/10 rounded-sm cursor-pointer transition-all">
              <span className="text-sm font-medium">급여 관리 가이드</span>
            </div>
          </div>

          {/* Premium */}
          <div className="space-y-2">
            <p className="px-4 text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest mb-2 mt-6">PREMIUM</p>
            <div className="flex items-center justify-between px-4 py-3 text-[#fef08a] hover:bg-[#d4af37]/10 rounded-sm cursor-pointer transition-all">
              <span className="text-sm font-medium">근무·휴가 관리</span>
              <span className="text-[10px] font-bold bg-[#d4af37]/20 text-[#d4af37] px-2 py-0.5 rounded border border-[#d4af37]/20">S/P</span>
            </div>
          </div>

          {/* Expertise */}
          <div className="space-y-2">
            <p className="px-4 text-[10px] font-bold text-[#d4af37]/80 uppercase tracking-widest mb-2 mt-6">EXPERTISE</p>
            <div className="flex items-center gap-4 px-4 py-3 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 rounded-sm cursor-pointer hover:bg-[#d4af37]/20 transition-all mb-1">
              <span className="text-lg">★</span> <span className="text-sm font-bold">버틀러 채용 대행</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-[#fef08a] hover:bg-[#d4af37]/10 rounded-sm cursor-pointer transition-all">
              <span className="text-sm opacity-90">📊</span> <span className="text-sm font-medium">맞춤 평가 시스템 설계</span>
            </div>
          </div>
        </nav>
      </aside>

      {/* 2. [메인 컨텐츠 영역] 오른쪽 나머지 공간을 모두 차지합니다. */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* 상단 헤더: 깔끔한 화이트 바탕, 높이 80px */}
        <header className="h-[80px] bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm shrink-0">
          <h2 className="text-xl font-bold italic tracking-tight text-gray-900">CEO STRATEGIC HUB</h2>
          <div className="flex items-center">
            <p className="text-sm font-bold text-gray-700">VAULT STATUS: <span className="text-[#d4af37]">Operational (D-28)</span></p>
          </div>
        </header>

        {/* 본문 영역: 카드와 배경의 명확한 구분을 위해 배경색을 아주 연한 회색(bg-gray-50)으로 지정하고 상하 여백을 매우 넓게(space-y-24) 줍니다. */}
        <div className="flex-1 overflow-y-auto p-12 space-y-24 bg-gray-50">

          {/* 1단: 인사 경영 안정도 (Card A) */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200 relative">
            <h3 className="font-bold text-black text-2xl flex items-center gap-4 mb-8">
              <span className="w-2 h-8 bg-[#d4af37] rounded-full" /> 인사 경영 안정도 분석
            </h3>

            <div className="grid grid-cols-12 gap-8 items-center">
              {/* 왼쪽: 거대한 점수 */}
              <div className="col-span-4 flex items-baseline justify-center border-r border-gray-100 pr-8">
                <span className="text-6xl font-black text-black tracking-tighter leading-none">82.0</span>
                <span className="text-3xl font-bold text-gray-400 ml-3">/ 100</span>
              </div>

              {/* 오른쪽: 분석 총평 */}
              <div className="col-span-8">
                <div className="bg-gray-50 p-10 rounded-2xl flex items-center h-full">
                  <p className="text-xl font-bold text-black leading-relaxed">
                    기초 법적 장치가 마련되어 있으나 의무 교육 및 취업규칙 갱신 권고
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2단 & 3단 컨테이너 (gap-8 컴플라이언트) */}
          <div className="grid grid-cols-12 gap-8">

            {/* [카드 B: 4대 인사 리스크 레이더] */}
            <div className="col-span-6 bg-white p-12 rounded-3xl shadow-xl border border-gray-200 relative">
              <h3 className="font-bold text-black flex items-center gap-4 text-2xl mb-10">
                <span className="w-2 h-8 bg-gray-800 rounded-full" /> 4대 인사 리스크 레이더
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "근로계약서", percent: 100, color: "bg-green-500" },
                  { label: "법정 의무 교육", percent: 45, color: "bg-[#facc15]" },
                  { label: "4대 보험", percent: 100, color: "bg-green-500" },
                  { label: "취업규칙", percent: 70, color: "bg-gray-400" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-2xl bg-gray-50 flex flex-col justify-between h-32">
                    <p className="text-lg font-black text-gray-800 mb-2 leading-relaxed">{item.label}</p>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-auto">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* [카드 C: 관리 리소스 분석 (Resource Load)] */}
            <div className="col-span-6 bg-slate-900 p-12 rounded-3xl shadow-xl border border-slate-700 flex flex-col justify-center relative">
              <h3 className="font-bold text-white flex items-center gap-4 text-2xl mb-12">
                <span className="w-2 h-8 bg-[#d4af37] rounded-full" /> CEO 관리 리소스 분석
              </h3>

              <div className="mb-10">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-black text-white uppercase tracking-wider">실무/행정 비중 48% <span className="text-red-400 ml-1">(위험 수준)</span></span>
                  <span className="text-lg font-black text-white uppercase tracking-wider">본질적 경영 52%</span>
                </div>
                <div className="flex h-14 w-full rounded-2xl overflow-hidden shadow-inner bg-gray-800 border border-slate-700">
                  <div className="bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center font-black text-white text-lg" style={{ width: '48%' }}>48%</div>
                  <div className="bg-slate-700 flex items-center justify-center font-black text-white text-lg" style={{ width: '52%' }}>52%</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl mt-auto">
                <p className="text-white text-lg font-bold leading-relaxed">
                  "대표님 실무 비중 45% 초과. 본질적 경영에 집중하기 위해 <span className="text-red-400 font-black underline underline-offset-4 decoration-2">채용이 시급합니다</span>."
                </p>
              </div>
            </div>
          </div>

          {/* [카드 D: 버틀러의 전략 제언] */}
          <div className="pt-12">
            <h3 className="font-bold text-black flex items-center gap-4 mb-8 text-2xl px-2">
              <span className="w-2 h-8 bg-[#d4af37] rounded-full" /> 버틀러의 전략 제언
            </h3>

            {/* 가로로 나란히 세운 독립된 두 개의 카드 */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "고용지원금 최대 1,200만 원 매칭", category: "정부지원", isNew: true, desc: "현재 조건에서 청년 일자리 도약 장려금 수령 가능 대상자로 확인되었습니다." },
                { title: "비등기 임원 근로자성 리스크 차단", category: "법률자문", isNew: false, desc: "최근 대법원 판례에 따른 임원 계약서 문구 수정 및 징계 규정 보완을 권고합니다." },
              ].map((action) => (
                <div key={action.title} className="flex flex-col justify-between p-12 bg-white rounded-3xl shadow-xl border border-gray-200 hover:border-[#d4af37]/50 transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer group relative min-h-[240px]">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-sm font-black px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full tracking-wider">{action.category}</span>
                      {action.isNew && <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>}
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-4 tracking-tight group-hover:text-[#d4af37] transition-colors leading-relaxed">{action.title}</h4>
                    <p className="text-lg font-medium text-gray-500 leading-relaxed">{action.desc}</p>
                  </div>
                  <div className="mt-8 flex justify-end items-center gap-2">
                    <span className="text-[#d4af37] font-bold text-lg group-hover:underline">상세 리포트 보기</span>
                    <span className="text-[#d4af37] transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}