import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private headers: HttpHeaders;
  private apiUrlHoliday: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlHoliday = this.dataService.getRootUrl() + 'holidays/';
  }

  /// ***********************[Holiday]***********************
  getHolidays(): Observable<any> {
    return this.http.get(this.apiUrlHoliday, { headers: this.headers });
  }

  insertHoliday(body) {
    return this.http.post(this.apiUrlHoliday, body, { headers: this.headers });
  }

  updateHoliday(id: string, body) {
    return this.http.put(this.apiUrlHoliday + id, body, { headers: this.headers });
  }

  deleteHoliday(id: string) {
    return this.http.delete(this.apiUrlHoliday + id, { headers: this.headers });
  }

  getHolidayById(id: string): any {
    return this.http.get(this.apiUrlHoliday + id, { headers: this.headers });
  }

}
