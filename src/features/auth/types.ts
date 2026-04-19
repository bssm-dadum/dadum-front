export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserCreateRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
}

export interface UserResponse {
  id: string; // Assuming UUID as string
  email: string;
  role: string; 
  // Add other fields matching server UserResponse structure
}
