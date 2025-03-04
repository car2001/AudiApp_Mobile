import { UsuarioResponse } from "./user";

export interface LoginUsuarioRequest {
  dni: string;
  password: string;
}

export interface CreateUsuarioRequest {
  nombre:string
  apellidos:string
  telefono: string,
  dni: string;
  password: string;
  passwordConfirm: string
}

export interface LoginResponse {
  token: string;
  isSuccess: boolean;
  usuario: UsuarioResponse
}