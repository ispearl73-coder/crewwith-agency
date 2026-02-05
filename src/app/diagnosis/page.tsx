"use client";

import { useState } from "react";
import Link from "next/link";

export default function DiagnosisPage() {
    const [step, setStep] = useState(1);
    const [hoveredTool, setHoveredTool] = useState<string | null>(null);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);
    const [selectedOutsourcing, setSelectedOutsourcing] = useState<string[]>([]);

    // Step 3 state
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

    // Step 4 state
    const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);

    const toggleTool = (tool: string) => {
        setSelectedTools(prev =>
            prev.includes(tool)
                ? prev.filter(t => t !== tool)
                : [...prev, tool]
        );
    };

    const toggleOutsourcing = (item: string) => {
        setSelectedOutsourcing(prev =>
            prev.includes(item)
                ? prev.filter(t => t !== item)
                : [...prev, item]
        );
    };

    const handleFileUpload = (docName: string) => {
        if (!uploadedFiles.includes(docName)) {
            setUploadedFiles(prev => [...prev, docName]);
        } else {
            setUploadedFiles(prev => prev.filter(f => f !== docName));
        }
    };

    const togglePainPoint = (point: string) => {
        setSelectedPainPoints(prev =>
            prev.includes(point)
                ? prev.filter(p => p !== point)
                : [...prev, point]
        );
    };

    const painPoints = [
        { id: "safety", title: "법적 안전장치 확보", desc: "근로계약서, 취업규칙 등 필수 서류의 법적 리스크를 점검하고 싶습니다." },
        { id: "automation", title: "반복 업무 자동화", desc: "매월 반복되는 급여 계산, 연차 관리, 4대 보험 행정 시간을 줄이고 싶습니다." },
        { id: "foundation", title: "조직 기틀 마련", desc: "우리 회사에 맞는 조직 구조를 설계하고, 직무별 명확한 역할(JD)을 정의하고 싶습니다." },
        { id: "talent", title: "우수 인재 확보 및 정착", desc: "채용 공고부터 신규 입사자의 빠른 적응(온보딩)을 돕는 체계를 만들고 싶습니다." },
        { id: "growth", title: "성장 중심의 평가/보상", desc: "직원들이 납득할 수 있는 성과 측정 기준과 합리적인 보상 체계를 세팅하고 싶습니다." }
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center px-6 py-24 font-sans selection:bg-[#d4af37] selection:text-black">

            {/* 1. 상단 타이틀 영역 */}
            <header className="mb-28 text-center text-white">
                <h1 className="text-[#d4af37] text-[12px] font-bold tracking-[0.5em] mb-4 uppercase opacity-60">Butler Agency</h1>
                <h2 className="text-4xl font-black tracking-tight">인사 진단 및 정보 수집</h2>
            </header>

            {/* 2. 상태 표시줄 */}
            <div className="w-full max-w-[825px] mb-8 px-8 flex justify-between items-end">
                <div className="flex flex-col gap-3">
                    <span className="text-[14px] text-[#d4af37] font-black tracking-widest uppercase italic">Step {step} / 4</span>
                    <div className="w-48 bg-white/10 h-[2px] rounded-full overflow-hidden">
                        <div
                            className="bg-[#d4af37] h-full transition-all duration-1000 ease-out"
                            style={{ width: `${(step / 4) * 100}%` }}
                        />
                    </div>
                </div>
                <span className="text-[11px] text-gray-500 font-bold tracking-widest uppercase opacity-80">Premium Startup Package</span>
            </div>

            <div className={`w-full max-w-[825px] bg-white/5 border border-white/10 rounded-[2.5rem] pt-24 px-24 shadow-2xl relative mt-4 transition-all duration-500 ${step === 1 ? 'min-h-[600px] pb-24' :
                step === 2 ? 'min-h-[750px] pb-24' :
                    step === 3 ? 'min-h-[750px] pb-24' :
                        'min-h-[750px] pb-24'
                }`}>

                <div className="w-full">
                    {step === 1 && (
                        <div className="flex flex-col text-center">
                            <h3 className="text-3xl font-bold mb-4">기본 정보를 입력해 주세요.</h3>
                            <div style={{ height: '40px' }} />
                            <div className="text-left max-w-[500px] mx-auto w-full">
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1 opacity-70 block">회사명</label>
                                    <div style={{ height: '10px' }} />
                                    <input type="text" placeholder="법인명을 입력하세요" className="w-full bg-white/[0.03] border-b-2 border-white/10 px-6 py-5 text-xl focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-800" />
                                </div>
                                <div style={{ height: '40px' }} />
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1 opacity-70 block">대표자 성함</label>
                                    <div style={{ height: '10px' }} />
                                    <input type="text" placeholder="성함을 입력하세요" className="w-full bg-white/[0.03] border-b-2 border-white/10 px-6 py-5 text-xl focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-800" />
                                </div>
                                <div style={{ height: '40px' }} />
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1 opacity-70 block">상시 근로자 수</label>
                                    <div style={{ height: '10px' }} />
                                    <input type="number" placeholder="0" className="w-full bg-white/[0.03] border-b-2 border-white/10 px-6 py-5 text-xl focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-800" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex flex-col text-center">
                            <h3 className="text-3xl font-bold text-white">현재 경영 환경</h3>

                            <div style={{ height: '50px' }} />

                            <div className="max-w-[700px] mx-auto w-full">
                                <div>
                                    <label className="block text-xs text-gray-500 font-bold uppercase tracking-widest opacity-70 text-center">
                                        활용 중인 협업/관리 툴
                                    </label>
                                    <div style={{ height: '24px' }} />
                                    <div className="grid grid-cols-2" style={{ gap: '20px' }}>
                                        {['슬랙/카톡', '노션', '플렉스/스윙비', '구글워크스페이스'].map((tool) => {
                                            const isSelected = selectedTools.includes(tool);
                                            const isHovered = hoveredTool === tool;
                                            return (
                                                <button
                                                    key={tool}
                                                    onClick={() => toggleTool(tool)}
                                                    onMouseEnter={() => setHoveredTool(tool)}
                                                    onMouseLeave={() => setHoveredTool(null)}
                                                    style={{
                                                        backgroundColor: isSelected ? '#d4af37' : (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'),
                                                        color: isSelected ? '#000000' : (isSelected || isHovered ? '#000000' : '#ffffff'),
                                                        borderColor: isSelected ? '#d4af37' : (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'),
                                                        transition: 'all 0.3s ease-in-out',
                                                    }}
                                                    className="w-full min-h-[60px] rounded-2xl border-2 flex items-center justify-center p-4 cursor-pointer text-lg font-black"
                                                >
                                                    {tool}
                                                    {isSelected && <span className="ml-2 text-sm">✓</span>}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div style={{ height: '50px' }} />

                                <div>
                                    <label className="block text-xs text-gray-500 font-bold uppercase tracking-widest opacity-70 text-center">
                                        활용 중인 아웃소싱 서비스
                                    </label>
                                    <div style={{ height: '24px' }} />
                                    <div className="grid grid-cols-2" style={{ gap: '20px' }}>
                                        {['세무/회계', '인사/노무', '법무', '마케팅'].map((item) => {
                                            const isSelected = selectedOutsourcing.includes(item);
                                            const isHovered = hoveredTool === item;
                                            return (
                                                <button
                                                    key={item}
                                                    onClick={() => toggleOutsourcing(item)}
                                                    onMouseEnter={() => setHoveredTool(item)}
                                                    onMouseLeave={() => setHoveredTool(null)}
                                                    style={{
                                                        backgroundColor: isSelected ? '#d4af37' : (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'),
                                                        color: isSelected ? '#000000' : (isSelected || isHovered ? '#000000' : '#ffffff'),
                                                        borderColor: isSelected ? '#d4af37' : (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'),
                                                        transition: 'all 0.3s ease-in-out',
                                                    }}
                                                    className="w-full min-h-[60px] rounded-2xl border-2 flex items-center justify-center p-4 cursor-pointer text-lg font-black"
                                                >
                                                    {item}
                                                    {isSelected && <span className="ml-2 text-sm">✓</span>}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="mt-14">
                                    <div className="h-[2px] w-full bg-white/5 mb-8" />
                                    <div className="flex flex-wrap justify-center gap-3 min-h-[40px]">
                                        {[...selectedTools, ...selectedOutsourcing].length > 0 ? (
                                            [...selectedTools, ...selectedOutsourcing].map((item) => (
                                                <span
                                                    key={item}
                                                    style={{ fontSize: '11px', padding: '6px 12px' }}
                                                    className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] font-bold animate-in zoom-in-50 duration-300 flex items-center shadow-sm"
                                                >
                                                    # {item}
                                                </span>
                                            ))
                                        ) : (
                                            <p className="text-gray-600 text-[11px] italic">선택된 항목이 없습니다.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="flex flex-col animate-in fade-in duration-700 text-center">
                            <h3 className="text-3xl font-bold">서류 업로드</h3>

                            <div style={{ height: '60px' }} />

                            <div className="grid grid-cols-3 text-left max-w-[750px] mx-auto w-full" style={{ gap: '20px' }}>
                                {[
                                    '사업자등록증', '등기부등본', '주주명부',
                                    '근로계약서 양식', '정관', '취업규칙',
                                    '조직도', '직원명부', '회사로고(CI)'
                                ].map((doc) => {
                                    const isUploaded = uploadedFiles.includes(doc);
                                    return (
                                        <div
                                            key={doc}
                                            onClick={() => handleFileUpload(doc)}
                                            className={`border-2 border-dashed rounded-[2rem] p-5 text-center cursor-pointer transition-all flex flex-col justify-center min-h-[84px] 
                        ${isUploaded
                                                    ? 'border-[#d4af37] bg-[#d4af37]/10'
                                                    : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                                                }`}
                                        >
                                            <p className={`text-[15px] font-bold leading-tight ${isUploaded ? 'text-[#d4af37]' : 'text-gray-400'}`}>
                                                {doc}
                                            </p>
                                            {isUploaded && <span className="text-[10px] text-[#d4af37] mt-2 font-black">UPLOADED ✓</span>}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="max-w-[750px] mx-auto w-full mt-12">
                                <div style={{ height: '20px' }} />
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                                    박스에 파일을 드래그하여 바로 업로드할 수 있습니다.
                                </p>

                                <div className="mt-10">
                                    <div className="h-[2px] w-full bg-white/5 mb-8" />
                                    <div className="flex flex-wrap justify-center gap-3 min-h-[40px]">
                                        {uploadedFiles.length > 0 ? (
                                            uploadedFiles.map((file) => (
                                                <span
                                                    key={file}
                                                    style={{ fontSize: '11px', padding: '6px 12px' }}
                                                    className="bg-blue-600/10 border border-blue-600/30 rounded-full text-blue-400 font-bold animate-in zoom-in-50 duration-300 flex items-center shadow-sm"
                                                >
                                                    FILE: {file}
                                                </span>
                                            ))
                                        ) : (
                                            <p className="text-gray-600 text-[11px] italic">업로드된 파일이 없습니다.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="flex flex-col animate-in fade-in duration-700 text-center">
                            <h3 className="text-3xl font-bold font-black mb-10">맞춤 서비스 추천을 위한 추가 정보</h3>

                            <div className="text-left max-w-[750px] mx-auto w-full px-4 space-y-4">
                                <label className="block text-xs text-gray-500 font-bold uppercase tracking-widest opacity-70 mb-6">해결하고 싶은 인사 과제 (중복 선택 가능)</label>

                                <div className="flex flex-col gap-2">
                                    {painPoints.map((point) => {
                                        const isSelected = selectedPainPoints.includes(point.id);
                                        return (
                                            <div
                                                key={point.id}
                                                onClick={() => togglePainPoint(point.id)}
                                                className={`group cursor-pointer p-3.5 rounded-xl border-2 transition-all flex items-start gap-3
                                                    ${isSelected
                                                        ? 'bg-[#d4af37]/10 border-[#d4af37]'
                                                        : 'bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.05]'
                                                    }`}
                                            >
                                                <div className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all
                                                    ${isSelected ? 'bg-[#d4af37] border-[#d4af37]' : 'border-white/30 group-hover:border-white/50'}`}>
                                                    {isSelected && <span className="text-black text-[10px] font-black">✓</span>}
                                                </div>
                                                <div>
                                                    <p className={`text-base font-bold mb-0.5 ${isSelected ? 'text-[#d4af37]' : 'text-gray-200'}`}>{point.title}</p>
                                                    <p className="text-[13px] text-gray-500 leading-snug font-medium">{point.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div style={{ height: '50px' }} />

                                <div>
                                    <label className="block text-xs text-gray-500 font-bold uppercase tracking-widest opacity-70 mb-6">현재 겪고 계신 고충을 자유롭게 들려주세요.</label>
                                    <textarea
                                        rows={5}
                                        placeholder="구체적인 상황을 적어주시면 더 정확한 진단이 가능합니다."
                                        className="w-full bg-white/[0.03] border-2 border-white/10 rounded-2xl p-8 pl-12 text-lg leading-relaxed focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-800 resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* 4. 하단 버튼 영역 */}
            <div className="w-full max-w-[825px] flex items-center justify-between mt-12 px-10">
                {step > 1 ? (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="px-14 py-6 rounded-2xl bg-blue-600 text-white font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                    >
                        이전 단계로
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="px-14 py-6 rounded-2xl bg-blue-600 text-white font-black text-lg hover:bg-blue-700 transition-all text-center shadow-xl shadow-blue-900/20 block active:scale-95"
                    >
                        홈으로 돌아가기
                    </Link>
                )}

                <button
                    onClick={() => step < 4 ? setStep(step + 1) : alert('데이터 전송 완료')}
                    className={`px-14 py-6 rounded-2xl font-black text-lg transition-all duration-300 active:scale-95 ${step < 4 ? 'bg-[#d4af37] text-black shadow-xl hover:bg-yellow-500' : 'bg-white text-black hover:bg-gray-200'
                        }`}
                >
                    {step < 4 ? '다음 단계로' : '진단 완료'}
                </button>
            </div>
        </div>
    );
}