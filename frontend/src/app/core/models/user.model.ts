export interface User {
  id: number;
  username: string;
  email: string;
  nombres: string;
  apellidos: string;
  rol: string;
  token?: string;
  type?: string;
}

export interface LoginResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  nombres: string;
  apellidos: string;
  rol: string;
}
