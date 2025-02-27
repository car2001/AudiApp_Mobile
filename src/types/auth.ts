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
  nombre:string
  apellidos:string
  telefono: string,
  dni: string;
  password: string;
  passwordConfirm: string
}