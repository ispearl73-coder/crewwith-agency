import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0a0f1c', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', position: 'relative', fontFamily: 'sans-serif' }}>

      {/* 배경 장식 */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', backgroundColor: 'rgba(30, 58, 138, 0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
      </div>

      {/* 메인 콘텐츠: 상하 여백을 60px로 줄여 더욱 컴팩트하게 배치 */}
      <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>

        {/* 헤더 섹션: 간결한 여백 조정 */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', marginBottom: '15px' }}>BUTLER AGENCY</h1>
          <h2 style={{ fontSize: '32px', fontWeight: '800', lineHeight: 1.3, marginBottom: '15px' }}>
            대표님의 경영 리소스를 최소화하는<br />
            <span style={{ color: '#d4af37' }}>스마트한 파트너</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#9ca3af' }}>대표님은 사업에만 집중하세요. 관리는 저희가 맡겠습니다.</p>
        </header>

        {/* 카드 영역 */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* 1. 창업 패키지: 패딩을 20px로 줄여 높이를 압축 */}
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px 40px', textAlign: 'center', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
            <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: '999px', fontSize: '9px', fontWeight: 'bold', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '12px' }}>PRE-FOUNDER</span>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>창업 패키지</h3>
            <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '13px', lineHeight: 1.5 }}>법인 설립부터 초기 세팅까지 완벽 가이드</p>
            <button style={{ width: '100%', padding: '12px', borderRadius: '10px', backgroundColor: 'transparent', border: '1px solid rgba(212, 175, 55, 0.4)', color: 'white', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>시작하기</button>
          </div>

          {/* 2. 스타트업 패키지: 인사 모듈 집중 및 컴팩트 디자인 */}
          <div style={{ width: '100%', maxWidth: '460px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px 40px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
            <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: '999px', fontSize: '9px', fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.2)', marginBottom: '12px' }}>CORPORATE</span>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>스타트업 패키지</h3>
            <p style={{ color: '#60a5fa', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>인사 모듈 집중 진단</p>
            <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '13px', lineHeight: 1.5 }}>노무 리스크 해결 및 팀 빌딩 최적화</p>
            <button style={{ width: '100%', padding: '12px', borderRadius: '10px', backgroundColor: '#3b82f6', border: 'none', color: 'white', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>인사 진단 시작</button>
          </div>

        </div>
      </main>

      {/* 푸터 영역 */}
      <footer style={{ width: '100%', padding: '30px 0', textAlign: 'center', fontSize: '10px', color: '#4b5563', borderTop: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: '#0a0f1c', marginTop: 'auto' }}>
        © 2026 BUTLER AGENCY. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}