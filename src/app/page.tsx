```
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-24 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px]" />
      </div>

      <main className="flex flex-col gap-16 items-center text-center max-w-6xl w-full z-10">
        
        {/* Header Section */}
        <header className="flex flex-col gap-6 items-center animate-fade-in-up">
          <div className="mb-4">
            {/* Logo Placeholder */}
            <h1 className="text-2xl font-bold tracking-widest uppercase text-white/80">Butler Agency</h1>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            대표님의 경영 리소스를 최소화하는<br />
            <span className="text-gradient-gold">스마트한 파트너</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-light">
            대표님은 사업에만 집중하세요.<br className="sm:hidden" /> 관리는 저희가 맡겠습니다.
          </p>
        </header>

        {/* Card Selection Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 w-full max-w-[1200px] mt-8 px-4 lg:px-0">
          
          {/* Pre-founder Card */}
          <div className="group glass-panel rounded-[2rem] p-12 flex flex-col justify-between items-center text-center gap-10 transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             <div className="flex flex-col items-center gap-5 z-10">
                <span className="px-5 py-2 rounded-full text-sm font-bold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 tracking-wide">
                  예비 창업자
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  창업 패키지
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg break-keep">
                  아직 법인을 설립하지 않으셨나요?<br />
                  법인 설립부터 초기 세팅까지,<br />
                  첫걸음을 완벽하게 가이드합니다.
                </p>
             </div>

             <button className="w-full py-5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-xl hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-300 shadow-lg mt-auto z-10">
               시작하기
             </button>
          </div>

          {/* Existing Startup Card */}
          <div className="group glass-panel rounded-[2rem] p-12 flex flex-col justify-between items-center text-center gap-10 transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

             <div className="flex flex-col items-center gap-5 z-10">
                <span className="px-5 py-2 rounded-full text-sm font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 tracking-wide">
                  기업 고객
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  스타트업 패키지
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg break-keep">
                  이미 운영 중인 기업이신가요?<br />
                  4대 모듈 정밀 진단으로<br />
                  빈틈없는 경영 시스템을 구축하세요.
                </p>
             </div>

             <button className="w-full py-5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-xl hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-300 shadow-lg mt-auto z-10">
               진단받기
             </button>
          </div>

        </div>
      </main>

      <footer className="absolute bottom-6 text-xs text-gray-600">
        © 2026 Butler Agency. All rights reserved.
      </footer>
    </div>
  );
}
