import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders;
  private apiUrlAuth: string;
  private apiUrlSignup: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlAuth = this.dataService.getRootUrl() + 'auth/';
    this.apiUrlSignup = this.dataService.getRootUrl() + 'signup/';
  }

  /// ***********************[signup]***********************
  signup(user): Observable<any> {

    return this.http.post(this.apiUrlSignup, user, { headers: this.headers });
  }

  /// ***********************[login]***********************
  login(user): Observable<any> {

    return this.http.post(this.apiUrlAuth, user, { headers: this.headers });
  }

  /// ***********************[signout]***********************
  signout() {
    if (this.dataService.token) {
      this.dataService.setToken([]);
      localStorage.removeItem('x-auth-token');
    }
  }
}
