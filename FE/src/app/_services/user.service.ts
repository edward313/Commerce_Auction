import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  logOutUser() {
    return this._http.get('/api/auth/logout', { responseType: 'text' });
  }

  getAll() {
    return this._http.get<User[]>('/api/user');
  }

  demoUser() {
    return this._http.get('/api/user', { responseType: 'text' });
  }

  GetOneUse(id: any) {
    return this._http.get<User[]>('/api/user');
  }
  changemk(data: any) {
    return this._http.post('/api/user/changePassword', data, { responseType: 'text' });
  }
}
