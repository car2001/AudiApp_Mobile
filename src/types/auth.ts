export interface LoginUsuarioRequest {
  dni: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
  };
}

export interface CreateUsuarioRequest {
  dni: string;
  password: string;
}