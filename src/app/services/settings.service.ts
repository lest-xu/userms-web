import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private headers: HttpHeaders;
  private apiUrlSettings: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlSettings = this.dataService.getRootUrl() + 'settings/';
  }

  /// ***********************[settings]***********************
  getSettings(): Observable<any> {
    return this.http.get(this.apiUrlSettings, { headers: this.headers });
  }

  insertSettings(body) {
    return this.http.post(this.apiUrlSettings, body, { headers: this.headers });
  }

  updateSettings(id: string, body) {
    return this.http.put(this.apiUrlSettings + id, body, { headers: this.headers });
  }

  deleteSettings(id: string) {
    return this.http.delete(this.apiUrlSettings + id, { headers: this.headers });
  }

  getSettingsById(id: string): any {
    return this.http.get(this.apiUrlSettings + id, { headers: this.headers });
  }
  /// ***********************[settings]***********************


}
