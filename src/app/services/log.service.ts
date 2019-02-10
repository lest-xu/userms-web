import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private headers: HttpHeaders;
  private apiUrlLog: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlLog = this.dataService.getRootUrl() + 'logs/';
  }

  /// ***********************[Log]***********************
  getLogs(): Observable<any> {
    return this.http.get(this.apiUrlLog, { headers: this.headers });
  }

  insertLog(body) {
    return this.http.post(this.apiUrlLog, body, { headers: this.headers });
  }

  updateLog(id: string, body) {
    return this.http.put(this.apiUrlLog + id, body, { headers: this.headers });
  }

  deleteLog(id: string) {
    return this.http.delete(this.apiUrlLog + id, { headers: this.headers });
  }

  getLogById(id: string): any {
    return this.http.get(this.apiUrlLog + id, { headers: this.headers });
  }

}
