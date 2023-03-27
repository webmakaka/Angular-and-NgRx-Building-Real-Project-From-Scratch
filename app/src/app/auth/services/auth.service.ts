import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAuthResponse } from 'src/app/auth/types/authResponse.interface';
import { ILoginRequest } from 'src/app/auth/types/loginRequest.interface';
import { IRegisterRequest } from 'src/app/auth/types/registerRequest.interface';
import { constants } from 'src/app/constants';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = constants.apiUrl + '/users';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = constants.apiUrl + '/users/login';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }
}
