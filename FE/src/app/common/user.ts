export interface User {
  id: number;
  email:string;
  password:string;
  firstname:string;
  lastname:string;
  address:string;
  roleid:string;
  // role: Role;
  // token?: string;
}

export interface UserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  address:string;
  firstname: string;
  lastname: string;
  roleid: string;
}
