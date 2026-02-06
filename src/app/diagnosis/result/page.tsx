"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function DiagnosisResultPage() {
    // 화면 상태 관리: 'report'(진단결과), 'account'(계정설정), 'pricing'(패키지안내)
    const [view, setView] = useState<'report' | 'account' | 'pricing'>('report');

    // 추천 요금제 상태 ('basic' | 'standard' | 'premium')
    // 실제 서비스에서는 진단 결과(점수)에 따라 서버나 로직에서 결정되어야 함. 
    // 여기서는 'standard'를 기본 추천으로 설정하되, 로직에 따라 변경 가능하도록 구성.
    const [recommendedTier, setRecommendedTier] = useState<'basic' | 'standard' | 'premium'>('standard');

    // 결제 모달 상태
    const [selectedPackage, setSelectedPackage] = useState<'basic' | 'standard' | 'premium' | null>(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const packageInfo = {
        basic: { name: "스타트업 베이직", price: "49,000" },
        standard: { name: "스타트업 스탠다드", price: "199,000" },
        premium: { name: "스타트업 프리미엄", price: "699,000" },
    };

    const handleApply = (tier: 'basic' | 'standard' | 'premium') => {
        setSelectedPackage(tier);
        setIsPaymentModalOpen(true);
    };

    // 전문가 티타임 신청 시 알림
    const handleTeatimeRequest = () => {
        alert("접수되었습니다. 담당 버틀러가 확인 후 곧 연락드리겠습니다. 잠시만 기다려 주십시오.");
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center selection:bg-[#d4af37] selection:text-black overflow-x-hidden">

            <div className="w-full flex flex-col items-center px-6 py-20" style={{ paddingBottom: '100px' }}>
                {/* 1. 상단 타이틀 로고 영역 */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h1 className="text-[#d4af37] text-[13px] font-bold tracking-[0.5em] mb-4 uppercase opacity-60">Confidential Butler Report</h1>
                    <h2 className="text-5xl font-black tracking-tighter">인사 경영 진단 리포트</h2>
                </motion.header>

                <div className="w-full max-w-[1100px]">
                    <AnimatePresence mode="wait">
                        {/* [A] 진단 결과 리포트 메인 화면 */}
                        {view === 'report' && (
                            <motion.div
                                key="report"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col gap-10"
                            >
                                <div className="bg-white/5 border border-[#d4af37]/20 rounded-[1.5rem] p-16 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-60 h-60 bg-[#d4af37]/5 rounded-full blur-[80px]" />

                                    {/* 의견 박스 영역 */}
                                    <motion.div
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="bg-white/[0.07] rounded-[12px] border border-white/20 shadow-inner relative z-10 transition-colors hover:border-white/30"
                                        style={{
                                            marginTop: '40px',
                                            paddingTop: '5rem',
                                            paddingBottom: '9rem',
                                            paddingLeft: '3rem',
                                            paddingRight: '3rem',
                                            marginBottom: '32px',
                                            marginLeft: '40px',
                                            marginRight: '40px',
                                            display: 'block',
                                            opacity: 1
                                        }}
                                    >
                                        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 relative z-20 text-white">
                                            <span className="w-1.5 h-10 bg-[#d4af37] rounded-full"></span>
                                            버틀러의 종합 분석 의견
                                        </h3>

                                        <div className="relative z-10">
                                            <p className="text-2xl leading-relaxed text-gray-100 mb-10 font-semibold text-pretty">
                                                대표님, 정밀 진단 결과 현재 <span className="text-[#d4af37] font-black underline underline-offset-8">"조직 성장에 따른 행정 체계 정립"</span>이 가장 시급한 우선순위 과제로 도출되었습니다.
                                            </p>
                                            <div className="space-y-8 text-gray-300 text-xl leading-relaxed">
                                                <p>
                                                    업로드하신 기업 서류를 분석한 결과, <strong className="text-white font-black">임원(사내이사)의 재선임 등기</strong> 시점이 임박했음을 발견했습니다. 해당 시기를 놓칠 경우 과태료 리스크가 발생하므로, 인사 규정 정비와 함께 법무 일정을 즉시 점검하시길 권고드립니다.
                                                </p>
                                                <p>
                                                    또한, 현재 활용 중인 <strong>협업 툴(Slack)</strong>이 인사 운영 로직과 연동되지 않아 대표님의 관리 리소스가 파편화되어 있습니다. 버틀러의 자동화 프로세스를 도입할 경우, 매달 반복되는 수기 행정 시간을 <span className="text-[#d4af37] font-bold">최소 15시간 이상 절감</span>하여 본질적인 경영 전략 수립에만 집중하실 수 있습니다.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* 하단 주요 액션 버튼 영역 */}
                                    <div className="flex flex-col items-center relative z-10 pt-10">
                                        <motion.button
                                            onClick={() => setView('account')}
                                            whileHover={{ scale: 1.02, backgroundColor: "#e5c040" }}
                                            whileTap={{ scale: 0.98 }}
                                            style={{ marginBottom: '32px' }}
                                            className="w-full max-w-[600px] py-[1.125rem] rounded-[0.375rem] bg-[#d4af37] text-black font-black text-2xl transition-all shadow-2xl shadow-yellow-900/40 relative z-30"
                                        >
                                            내 경영 대시보드로 이동하기
                                        </motion.button>

                                        <div className="flex flex-wrap justify-center gap-10 relative z-30">
                                            <motion.button
                                                onClick={() => setView('pricing')}
                                                whileHover={{ scale: 1.05, border: "2px solid rgba(255, 255, 255, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-[240px] py-6 rounded-xl bg-white/10 border-2 border-white/10 text-white font-bold text-lg transition-all shadow-xl"
                                            >
                                                유료 패키지 신청하기
                                            </motion.button>
                                            <motion.button
                                                onClick={handleTeatimeRequest}
                                                whileHover={{ scale: 1.05, border: "2px solid rgba(255, 255, 255, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-[240px] py-6 rounded-xl bg-white/10 border-2 border-white/10 text-white font-bold text-lg transition-all shadow-xl"
                                            >
                                                1:1 전문가 티타임
                                            </motion.button>
                                            <Link href="/" className="w-[240px] py-6 rounded-xl bg-white/10 border-2 border-white/10 text-white font-bold text-lg transition-all flex items-center justify-center hover:bg-white/15 hover:border-white/20 shadow-xl">
                                                홈으로
                                            </Link>
                                        </div>
                                        <p className="text-[12px] text-gray-500 italic mt-12 font-medium">* 본 리포트와 서류는 보안 대시보드에서 30일간 무료로 안전하게 보관됩니다.</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* [B] 계정 보안 설정 (ID/PW) 화면 */}
                        {view === 'account' && (
                            <motion.div
                                key="account"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 border border-[#d4af37]/30 rounded-[1.5rem] p-20 text-center max-w-[700px] mx-auto w-full relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#d4af37]/5 pointer-events-none" />
                                <h4 className="text-4xl font-black mb-6 text-white tracking-tight relative z-10">경영 금고 보안 설정</h4>
                                <p className="text-gray-400 text-lg mb-12 relative z-10">
                                    대표님의 진단 리포트 열람 및 30일간의 무료 관리를 위해 <br />
                                    로그인 정보를 설정해 주세요.
                                </p>
                                <div className="max-w-[400px] mx-auto space-y-4 relative z-10">
                                    <input type="email" placeholder="아이디 (이메일 주소)" className="w-full bg-black/40 border-2 border-white/10 rounded-xl px-8 py-5 text-lg focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700" />
                                    <input type="password" placeholder="비밀번호 설정" className="w-full bg-black/40 border-2 border-white/10 rounded-xl px-8 py-5 text-lg focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700" />
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-6 rounded-xl bg-[#d4af37] text-black font-black text-xl hover:bg-yellow-500 transition-all shadow-xl"
                                    >
                                        안전하게 리포트 저장하기
                                    </motion.button>
                                </div>
                                <button onClick={() => setView('report')} className="mt-12 text-gray-600 text-sm hover:text-white transition-colors underline underline-offset-4 relative z-10">이전으로 돌아가기</button>
                            </motion.div>
                        )}

                        {/* [C] 패키지 안내/결제 화면 */}
                        {view === 'pricing' && (
                            <motion.div
                                key="pricing"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <h4 className="text-4xl font-black mb-16 text-center text-[#d4af37]">스타트업 정기 패키지 안내</h4>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                                        gap: '2rem',
                                        paddingBottom: '20px'
                                    }}
                                >
                                    {/* 1. 베이직 패키지 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className={`p-8 flex flex-col transition-all h-full relative z-10 rounded-[0.375rem] border ${recommendedTier === 'basic' ? 'bg-[#d4af37]/5 border-[#d4af37] shadow-2xl shadow-yellow-900/20 scale-[1.03]' : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'}`}
                                    >
                                        {recommendedTier === 'basic' && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black text-[10px] font-black px-4 py-1 rounded-full whitespace-nowrap tracking-wider">RECOMMENDED</div>
                                        )}
                                        <div className="mb-8">
                                            <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Basic Grade</p>
                                            <h5 className="text-2xl font-black mb-2">스타트업 베이직</h5>
                                            <p className="text-3xl font-bold text-white">₩ 49,000 <span className="text-sm font-normal text-gray-500">/ 월</span></p>
                                        </div>
                                        <div className="flex-grow mb-10">
                                            <ul className="space-y-4 text-sm text-gray-400">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">기초 인사 데이터베이스(DB) 구축</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">표준 인사 서류 및 계약서 양식 제공</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">매월 정기 인사/노무 가이드 발송</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">기본 리스크 알림 서비스</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button
                                            onClick={() => handleApply('basic')}
                                            className={`w-full py-5 mt-auto rounded-xl font-black transition-all border mb-2 ${recommendedTier === 'basic' ? 'bg-[#d4af37] text-black hover:bg-[#b5942f] border-[#d4af37]' : 'bg-white/10 text-white hover:bg-white/20 border-white/10'}`}>신청하기</button>
                                    </motion.div>

                                    {/* 2. 스탠다드 패키지 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className={`p-8 flex flex-col transition-all h-full relative z-10 rounded-[0.375rem] border ${recommendedTier === 'standard' ? 'bg-[#d4af37]/5 border-[#d4af37] shadow-2xl shadow-yellow-900/20 scale-[1.03]' : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'}`}
                                    >
                                        {recommendedTier === 'standard' && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black text-[10px] font-black px-4 py-1 rounded-full whitespace-nowrap tracking-wider">RECOMMENDED</div>
                                        )}
                                        <div className="mb-8">
                                            <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Standard Grade</p>
                                            <h5 className="text-2xl font-black mb-2 text-white">스타트업 스탠다드</h5>
                                            <p className="text-3xl font-bold text-white">₩ 199,000 <span className="text-sm font-normal text-gray-500">/ 월</span></p>
                                        </div>
                                        <div className="flex-grow mb-10">
                                            <ul className="space-y-4 text-sm text-gray-400">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">인사 운영 자동화 로직 도입</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">전용 채널을 통한 버틀러 상시 보좌</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">임원 임기 및 법령 대응 자동 알림</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">실무 중심 인사 관리 프로세스 구축</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button
                                            onClick={() => handleApply('standard')}
                                            className={`w-full py-5 mt-auto rounded-xl font-black transition-all border mb-2 ${recommendedTier === 'standard' ? 'bg-[#d4af37] text-black hover:bg-[#b5942f] border-[#d4af37]' : 'bg-white/10 text-white hover:bg-white/20 border-white/10'}`}>신청하기</button>
                                    </motion.div>

                                    {/* 3. 프리미엄 패키지 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className={`p-8 flex flex-col transition-all h-full relative z-10 rounded-[0.375rem] border ${recommendedTier === 'premium' ? 'bg-[#d4af37]/5 border-[#d4af37] shadow-2xl shadow-yellow-900/20 scale-[1.03]' : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'}`}
                                    >
                                        {recommendedTier === 'premium' && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black text-[10px] font-black px-4 py-1 rounded-full whitespace-nowrap tracking-wider">RECOMMENDED</div>
                                        )}
                                        <div className="mb-8">
                                            <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Premium Grade</p>
                                            <h5 className="text-2xl font-black mb-2 text-white">스타트업 프리미엄</h5>
                                            <p className="text-3xl font-bold text-white">₩ 699,000 <span className="text-sm font-normal text-gray-500">/ 월</span></p>
                                        </div>
                                        <div className="flex-grow mb-10">
                                            <ul className="space-y-4 text-sm text-gray-400">
                                                <li className="flex items-start gap-3 font-bold text-white">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">커스터마이징 전문 인사 전략 리포트</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">데이터 기반 정밀 조직 분석 및 진단</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">정부지원사업/인증 밀착 케어 서비스</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-[#d4af37] mt-1">•</span>
                                                    <span className="leading-tight">1:1 전담 시니어 버틀러 밀착 배정</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button
                                            onClick={() => handleApply('premium')}
                                            className={`w-full py-5 mt-auto rounded-xl font-black transition-all border mb-2 ${recommendedTier === 'premium' ? 'bg-[#d4af37] text-black hover:bg-[#b5942f] border-[#d4af37]' : 'bg-white/10 text-white hover:bg-white/20 border-white/10'}`}>신청하기</button>
                                    </motion.div>
                                </div>

                                <motion.button
                                    onClick={() => setView('report')}
                                    whileHover={{ scale: 1.05, border: "2px solid rgba(255, 255, 255, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-[240px] py-6 rounded-xl bg-white/10 border-2 border-white/10 text-white font-bold text-lg transition-all shadow-xl block mx-auto relative z-50 mb-20"
                                    style={{ marginTop: '75px' }}
                                >
                                    진단 결과 다시 확인하기
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>

            {/* 푸터 겹침 방지를 위한 강제 공간 확보 (Spacer) */}
            <div style={{ height: '100px', width: '100%' }} />

            <footer className="w-full py-12 text-center opacity-30 text-[10px] font-bold tracking-[0.2em] bg-[#0a0f1c]">
                © 2026 CREWWITH BUTLER AGENCY. ALL RIGHTS RESERVED.
            </footer>

            {/* [D] 버틀러 결제 가이드 모달 - 화면 최상단 레이어 배치를 위해 이동 */}
            <AnimatePresence>
                {isPaymentModalOpen && selectedPackage && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsPaymentModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-[500px] bg-[#1a1f2e] border border-white/10 rounded-[2rem] p-10 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-[#d4af37]/10 rounded-full blur-[80px]" />

                            <div className="relative z-10 text-center">
                                <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-8 rounded-full opacity-50" />
                                <h3 className="text-3xl font-black mb-10 text-white tracking-tight">[ 버틀러 결제 가이드 ]</h3>

                                <div className="space-y-8 text-left mb-12">
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <p className="text-gray-400 text-sm mb-2 font-medium">선택 패키지 요약</p>
                                        <p className="text-xl font-bold text-white">
                                            "대표님, <span className="text-[#d4af37]">{packageInfo[selectedPackage].name}</span>를 선택하셨습니다."
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <p className="text-gray-400 text-sm mb-2 font-medium">결제 금액</p>
                                        <p className="text-2xl font-black text-white">
                                            월 {packageInfo[selectedPackage].price}원 <span className="text-sm font-normal text-gray-500">(VAT 별도)</span>
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                        <p className="text-gray-400 text-sm mb-3 font-medium">연락처 입력 (안내 문자 발송용)</p>
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            placeholder="010-0000-0000"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-gray-400 text-sm font-medium px-2">결제 수단 선택</p>
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-5 relative opacity-60">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-bold text-white">신용카드</span>
                                                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">준비 중</span>
                                                </div>
                                                <p className="text-xs text-gray-500">"간편한 정기 결제를 준비 중입니다."</p>
                                            </div>
                                            <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl p-5 relative">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-bold text-[#d4af37]">계좌이체 / 무통장</span>
                                                    <span className="text-[10px] bg-[#d4af37] px-2 py-0.5 rounded text-black font-black uppercase">Most Popular</span>
                                                </div>
                                                <p className="text-xs text-gray-300">"세금계산서 발행이 가능합니다."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            if (!phoneNumber) {
                                                alert("연락처를 입력해 주세요.");
                                                return;
                                            }
                                            alert(`${phoneNumber} 번호로 결제 안내 문자가 발송되었습니다. (시뮬레이션)`);
                                            setIsPaymentModalOpen(false);
                                        }}
                                        className="w-full py-5 rounded-xl bg-[#d4af37] text-black font-black text-lg transition-all shadow-lg"
                                    >
                                        결제 정보를 문자로 보내드리기
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            alert("추가 상담이 접수되었습니다. 담당 버틀러가 곧 연락드립니다. (시뮬레이션)");
                                            setIsPaymentModalOpen(false);
                                        }}
                                        className="w-full py-5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all"
                                    >
                                        버틀러와 직접 상담
                                    </motion.button>
                                    <button
                                        onClick={() => setIsPaymentModalOpen(false)}
                                        className="text-gray-600 text-sm mt-4 hover:text-white transition-colors"
                                    >
                                        창 닫기
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
