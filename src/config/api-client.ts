import { ENV } from './env';

class ApiError extends Error {
  constructor(public status: number, public data: any, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchClient(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('accessToken');
  
  const headers = new Headers(options.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const url = `${ENV.API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, { ...options, headers });

  // Token refresh logic can be added here if response.status === 401

  if (!response.ok) {
    let devMessage = 'API 요청에 실패했습니다.';
    let errorData = null;
    try {
      errorData = await response.json();
      devMessage = errorData.message || errorData.error || devMessage;
    } catch {
      // Ignore if not JSON
    }
    throw new ApiError(response.status, errorData, devMessage);
  }

  // No content handling
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const apiClient = {
  get: (endpoint: string, options?: RequestInit) => fetchClient(endpoint, { ...options, method: 'GET' }),
  post: (endpoint: string, data?: any, options?: RequestInit) => fetchClient(endpoint, { ...options, method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint: string, data?: any, options?: RequestInit) => fetchClient(endpoint, { ...options, method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint: string, options?: RequestInit) => fetchClient(endpoint, { ...options, method: 'DELETE' }),
};
