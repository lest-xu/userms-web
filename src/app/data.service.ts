import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  readonly ApiUrlRoot = 'http://45.76.167.184:3000/api/';
  readonly ApiUrlUsers = this.ApiUrlRoot + 'users/';
  readonly ApiUrlAddress = this.ApiUrlRoot + 'addresses/';
  readonly ApiUrlHr = this.ApiUrlRoot + 'hr/';
  readonly ApiUrlDepartments = this.ApiUrlRoot + 'departments/';
  readonly ApiUrlRoles = this.ApiUrlRoot + 'roles/';
  readonly ApiUrlApps = this.ApiUrlRoot + 'apps/';
  readonly ApiUrlAuth = this.ApiUrlRoot + 'auth/';
  readonly ApiUrlSignup = this.ApiUrlRoot + 'signup/';
  // tslint:disable-next-line:max-line-length
  readonly token = null;
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUsers(token:string): Observable<any> {
    const headers = this.setHttpHeaders(token);
    return this.http.get(this.ApiUrlUsers, { headers: headers });
  }


  getUserById(id: string,token:string): any {
    const headers = this.setHttpHeaders(token);
    return this.http.get(this.ApiUrlUsers + id, { headers: headers });
  }

  login(user): Observable<any> {
    const headers = this.setHttpHeadersLogin();

    return this.http.post(this.ApiUrlAuth, user, { headers: headers});
  }


  setHttpHeadersLogin() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  setHttpHeaders(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('x-auth-token', token);

    return headers;
  }
}

interface CacheContent {
  expiry: number;
  value: any;
}
