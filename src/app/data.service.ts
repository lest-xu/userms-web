import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  private readonly apiRootUrl = 'http://45.76.167.184:3000/api/';
  private readonly ApiUrlUsers = this.apiRootUrl + 'users/';
  private readonly ApiUrlAddress = this.apiRootUrl + 'addresses/';
  private readonly ApiUrlHr = this.apiRootUrl + 'hr/';
  private readonly ApiUrlDepartments = this.apiRootUrl + 'departments/';
  private readonly ApiUrlRoles = this.apiRootUrl + 'roles/';
  private readonly ApiUrlApps = this.apiRootUrl + 'apps/';
  private readonly ApiUrlAuth = this.apiRootUrl + 'auth/';
  private readonly ApiUrlSignup = this.apiRootUrl + 'signup/';
  private readonly ApiUrlSettings = this.apiRootUrl + 'settings/';

  private _rootUrl = new BehaviorSubject<any>([]);
  rootUrl = this._rootUrl.asObservable();

  private _token = new BehaviorSubject<any>([]);
  token = this._token.asObservable();

  private _theme = new BehaviorSubject<any>([]);
  theme = this._theme.asObservable();

  constructor(private http: HttpClient) { }

  setRootUrl(data: any) {
    this._rootUrl.next(data);
  }

  getRootUrl() {
    return this.apiRootUrl;
  }

  /// ***********************[token]***********************
  setToken(data: any) {
    this._token.next(data);
  }

  /// ***********************[theme]***********************
  setTheme(data: any) {
    this._theme.next(data);
  }

  /// ***********************[data item]***********************
  getDataItems(apiUrl: string): Observable<any> {
    const headers = this.setHttpHeaders();
    return this.http.get(this.apiRootUrl + apiUrl, { headers: headers });
  }

  insertDataItem(body, apiUrl: string) {
    const headers = this.setHttpHeaders();
    return this.http.post(this.apiRootUrl + apiUrl, body, { headers: headers });
  }

  updateDataItem(id: string, body, apiUrl: string) {
    const headers = this.setHttpHeaders();
    return this.http.put(this.apiRootUrl + apiUrl + id, body, { headers: headers });
  }

  deleteDataItem(id: string, apiUrl: string) {
    const headers = this.setHttpHeaders();
    return this.http.delete(this.apiRootUrl + apiUrl + id, { headers: headers });
  }

  getDataItemById(id: string, apiUrl: string): any {
    const headers = this.setHttpHeaders();
    return this.http.get(this.apiRootUrl + apiUrl + id, { headers: headers });
  }


  setHttpHeadersLogin() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  setHttpHeaders() {
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
