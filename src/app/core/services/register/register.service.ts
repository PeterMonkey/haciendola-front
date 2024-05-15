import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../../../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(data: Register): Observable<{token:string}> {
    return this.http.post<{token:string}>('http://localhost:3000/auth/register', data)
  }
}
