import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  private readonly ApiUrlRoot = 'http://45.76.167.184:3000/api/';
  private readonly ApiUrlUsers = this.ApiUrlRoot + 'users/';
  private readonly ApiUrlAddress = this.ApiUrlRoot + 'addresses/';
  private readonly ApiUrlHr = this.ApiUrlRoot + 'hr/';
  private readonly ApiUrlDepartments = this.ApiUrlRoot + 'departments/';
  private readonly ApiUrlRoles = this.ApiUrlRoot + 'roles/';
  private readonly ApiUrlApps = this.ApiUrlRoot + 'apps/';
  private readonly ApiUrlAuth = this.ApiUrlRoot + 'auth/';
  private readonly ApiUrlSignup = this.ApiUrlRoot + 'signup/';
  private readonly ApiUrlSettings = this.ApiUrlRoot + 'settings/';

  private _token = new BehaviorSubject<any>([]);
  token = this._token.asObservable();

  constructor(private http: HttpClient) { }

  /// ***********************[token]***********************
  setToken(data: any) {
    this._token.next(data);
  }
  /// ***********************[token]***********************

  /// ***********************[settings]***********************
  getUsers(): Observable<any> {
    const headers = this.setHttpHeaders();
    return this.http.get(this.ApiUrlUsers, { headers: headers });
  }

  insertUser(body, token: string) {
    const headers = this.setHttpHeaders();
    return this.http.post(this.ApiUrlUsers, body, { headers: headers });
  }

  updateUser(id: string, body, token: string) {
    const headers = this.setHttpHeaders();
    return this.http.put(this.ApiUrlUsers + id, body, { headers: headers });
  }

  deleteUser(id: string, token: string) {
    const headers = this.setHttpHeaders();
    return this.http.delete(this.ApiUrlUsers + id, { headers: headers });
  }

  getUserById(id: string, token: string): any {
    const headers = this.setHttpHeaders();
    return this.http.get(this.ApiUrlUsers + id, { headers: headers });
  }
  /// ***********************[settings]***********************

  /// ***********************[login]***********************
  login(user): Observable<any> {
    const headers = this.setHttpHeadersLogin();

    return this.http.post(this.ApiUrlAuth, user, { headers: headers });
  }
  /// ***********************[login]***********************

  /// ***********************[settings]***********************
  getSettings(token: string): Observable<any> {
    const headers = this.setHttpHeaders();
    return this.http.get(this.ApiUrlSettings, { headers: headers });
  }

  insertSettings(body, token: string) {
    const headers = this.setHttpHeaders();
    return this.http.post(this.ApiUrlSettings, body, { headers: headers });
  }

  updateSettings(id: string, body, token: string) {
    const headers = this.setHttpHeaders();
    return this.http.put(this.ApiUrlSettings + id, body, { headers: headers });
  }

  deleteSettings(id: string, token: string) {
    const headers = this.setHttpHeaders();
    return this.http.delete(this.ApiUrlSettings + id, { headers: headers });
  }

  getSettingsById(id: string, token: string): any {
    const headers = this.setHttpHeaders();
    return this.http.get(this.ApiUrlSettings + id, { headers: headers });
  }
  /// ***********************[settings]***********************




  private setHttpHeadersLogin() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  private setHttpHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    let temToken = '';
    this.token.subscribe(i => temToken = i);
    headers = headers.set('x-auth-token', temToken);

    return headers;
  }

}

interface CacheContent {
  expiry: number;
  value: any;
}
