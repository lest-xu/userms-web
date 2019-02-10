import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  private headers: HttpHeaders;
  private apiUrlApp: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlApp = this.dataService.getRootUrl() + 'apps/';
  }

  /// ***********************[App]***********************
  getApps(): Observable<any> {
    return this.http.get(this.apiUrlApp, { headers: this.headers });
  }

  insertApp(body) {
    return this.http.post(this.apiUrlApp, body, { headers: this.headers });
  }

  updateApp(id: string, body) {
    return this.http.put(this.apiUrlApp + id, body, { headers: this.headers });
  }

  deleteApp(id: string) {
    return this.http.delete(this.apiUrlApp + id, { headers: this.headers });
  }

  getAppById(id: string): any {
    return this.http.get(this.apiUrlApp + id, { headers: this.headers });
  }

}
