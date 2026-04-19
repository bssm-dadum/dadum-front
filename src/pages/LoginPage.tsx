import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin, useSignup } from '../features/auth/hooks/useLogin';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used loosely in UI for now

  const loginMutation = useLogin();
  const signupMutation = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate({ email, password });
    } else {
      signupMutation.mutate(
        { email, password },
        {
          onSuccess: () => {
            // Optional: Auto switch to login tab and clear fields, or handle it in the hook's onSuccess
            setIsLogin(true);
            setPassword('');
          }
        }
      );
    }
  };

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
            type="button"
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
            type="button"
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
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* Name Field (Only on Signup) */}
          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-xs font-medium text-zinc-400">
                이름
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              minLength={isLogin ? undefined : 8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors tracking-widest"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loginMutation.isPending || signupMutation.isPending}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-sm py-3.5 rounded-lg transition-colors mt-8 shadow-lg shadow-blue-500/20"
          >
            {isLogin 
              ? (loginMutation.isPending ? '로그인 중...' : '로그인') 
              : (signupMutation.isPending ? '회원가입 중...' : '회원가입')}
          </button>
        </form>

        {/* Footer Toggle Text */}
        <div className="mt-6 text-center text-xs text-zinc-500">
          {isLogin ? (
            <p>
              계정이 없으신가요?{' '}
              <button 
                type="button"
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
                type="button"
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
