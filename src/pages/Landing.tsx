import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Glow 중심점을 마우스 커서에 맞추기 위해 x, y 좌표 업데이트
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-blue-500/30 flex flex-col relative overflow-hidden">

      {/* Dynamic Glow Background */}
      <div
        className="absolute w-[40vw] max-w-[500px] h-[350px] bg-blue-500/40 blur-[100px] rounded-full point-events-none transition-transform duration-75 ease-out z-20 pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'color-dodge'
        }}
      />

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/5 relative z-10 bg-[#141414]/50 backdrop-blur-sm">
        <div className="flex items-baseline font-black text-2xl tracking-tighter cursor-pointer">
          DADUM<span className="text-blue-500">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400">
          <div 
            onClick={() => window.open("https://github.com/bssm-dadum", "_blank")}
            className="px-4 py-2 text-base hover:bg-white/5 hover:text-white rounded-lg transition-all cursor-pointer flex items-center justify-center min-w-[80px]"
          >
            Github
          </div>
          <a href="#" className="px-4 py-2 text-base hover:bg-white/5 hover:text-white rounded-lg transition-all flex items-center justify-center min-w-[80px]">
            커뮤니티
          </a>
          <a href="#" className="px-4 py-2 text-base hover:bg-white/5 hover:text-white rounded-lg transition-all flex items-center justify-center min-w-[80px]">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-5 py-2 text-sm font-medium text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-md transition-all">
            로그인
          </Link>
          <Link to="/login" state={{ isSignUp: true }} className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-lg shadow-blue-500/20">
            회원가입
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-10">

        <div className="relative flex flex-col items-center w-full max-w-5xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-5 w-[2px] bg-blue-600 rounded-full" />
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              ENV 공유 플랫폼
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center font-black tracking-tighter leading-none drop-shadow-sm flex flex-col items-center relative z-10 pointer-events-none">
            <h1 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] text-zinc-600 transition-colors duration-300">
              SHARE YOUR
            </h1>
            <div className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] mt-2 md:mt-4 flex flex-wrap justify-center gap-3 md:gap-5">
              <span className="text-zinc-600">.ENV</span>
              <span className="text-blue-700/80">SAFELY.</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-10 text-center text-zinc-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl px-4">
            API 키와 환경변수를 암호화하여 팀과 안전하게 공유하세요.<br />
            프로젝트별 관리, 실시간 동기화, 세밀한 권한 제어까지.
          </p>
        </div>
      </main>
    </div>
  );
};

