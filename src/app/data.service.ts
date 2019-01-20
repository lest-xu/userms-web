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
  readonly token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzM5NzAzNmNkZDBlMTM5ZTRhODVjNTgiLCJpYXQiOjE1NDczMTE5MzZ9.M54jnZjX4XBBmtdCy-cU305xE-9vbBwSFx-tYbzOpW8';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const headers = this.setHttpHeaders();
    return this.http.get(this.ApiUrlUsers, { headers: headers });
  }


  getUserById(id: string): any {
    const headers = this.setHttpHeaders();
    return this.http.get(this.ApiUrlUsers + id, { headers: headers });
  }

  signIn(user): Observable<any> {
    const headers = this.setHttpHeaders();

    return this.http.post(this.ApiUrlAuth, user, { headers: headers});
  }


  setHttpHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('x-auth-token', this.token);

    return headers;
  }
}

interface CacheContent {
  expiry: number;
  value: any;
}
