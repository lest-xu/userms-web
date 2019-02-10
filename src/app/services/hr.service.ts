import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  private headers: HttpHeaders;
  private apiUrlHumanResource: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlHumanResource = this.dataService.getRootUrl() + 'hr/';
  }

  /// ***********************[HumanResource]***********************
  getHumanResources(): Observable<any> {
    return this.http.get(this.apiUrlHumanResource, { headers: this.headers });
  }

  insertHumanResource(body) {
    return this.http.post(this.apiUrlHumanResource, body, { headers: this.headers });
  }

  updateHumanResource(id: string, body) {
    return this.http.put(this.apiUrlHumanResource + id, body, { headers: this.headers });
  }

  deleteHumanResource(id: string) {
    return this.http.delete(this.apiUrlHumanResource + id, { headers: this.headers });
  }

  getHumanResourceById(id: string): any {
    return this.http.get(this.apiUrlHumanResource + id, { headers: this.headers });
  }

}
