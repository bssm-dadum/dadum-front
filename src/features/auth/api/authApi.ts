import { apiClient } from '../../../config/api-client';
import type { LoginRequest, LoginResponse, UserCreateRequest, UserResponse } from '../types';

export const authApi = {
  login: (data: LoginRequest): Promise<LoginResponse> => {
    return apiClient.post('/api/auth/login', data);
  },
  
  signup: (data: UserCreateRequest): Promise<UserResponse> => {
    return apiClient.post('/api/auth/signup', data);
  },
  
  refresh: (refreshToken: string): Promise<LoginResponse> => {
    return apiClient.post('/api/auth/refresh', { refreshToken });
  }
};
