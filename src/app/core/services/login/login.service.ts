import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../../interfaces/login';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: Login): Observable<{token:string}> {
    return this.http.post<{token:string}>(`${environment.url}auth/login`, data)
  }
}
