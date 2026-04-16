import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center p-4 selection:bg-blue-500/30">
      <div className="w-full max-w-[440px] bg-[#1c1c1c] rounded-2xl p-8 shadow-2xl border border-white/5">
        
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="inline-block font-black text-2xl tracking-tighter">
            DADUM<span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#141414] p-1 rounded-lg mb-8 border border-white/5">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
              isLogin 
                ? 'bg-[#2a2a2a] text-white shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            로그인
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
              !isLogin 
                ? 'bg-[#2a2a2a] text-white shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            회원가입
          </button>
        </div>

        {/* Forms */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Field (Only on Signup) */}
          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-xs font-medium text-zinc-400">
                이름
              </label>
              <input
                type="text"
                placeholder="홍길동"
                className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-zinc-400">
              이메일
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-xs font-medium text-zinc-400">
              비밀번호
            </label>
            <input
              type="password"
              placeholder={isLogin ? "••••••••" : "8자 이상"}
              className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors tracking-widest"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3.5 rounded-lg transition-colors mt-8 shadow-lg shadow-blue-500/20"
          >
            {isLogin ? '로그인' : '회원가입'}
          </button>
        </form>

        {/* Footer Toggle Text */}
        <div className="mt-6 text-center text-xs text-zinc-500">
          {isLogin ? (
            <p>
              계정이 없으신가요?{' '}
              <button 
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors cursor-pointer"
              >
                회원가입
              </button>
            </p>
          ) : (
            <p>
              이미 계정이 있으신가요?{' '}
              <button 
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors cursor-pointer"
              >
                로그인
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
