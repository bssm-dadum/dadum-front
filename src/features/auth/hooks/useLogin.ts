import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/authApi';
import type { LoginRequest, UserCreateRequest } from '../types';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      navigate('/home'); // 성공 시 홈으로 이동
    },
    onError: (error: any) => {
      alert(error.message || '로그인에 실패했습니다.');
    }
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: UserCreateRequest) => authApi.signup(data),
    onSuccess: () => {
      alert('회원가입이 완료되었습니다. 로그인해주세요.');
    },
    onError: (error: any) => {
      alert(error.message || '회원가입에 실패했습니다.');
    }
  });
};
