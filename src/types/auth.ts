export interface LoginUsuarioRequest {
    dni: string;
    clave: string;
}

export interface LoginResponse {
    token: string;
    user: {
      id: number;
      name: string;
    };
}