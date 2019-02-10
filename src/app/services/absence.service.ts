import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private headers: HttpHeaders;
  private apiUrlAbsence: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlAbsence = this.dataService.getRootUrl() + 'absences/';
  }

  /// ***********************[absence]***********************
  getAbsences(): Observable<any> {
    return this.http.get(this.apiUrlAbsence, { headers: this.headers });
  }

  insertAbsence(body) {
    return this.http.post(this.apiUrlAbsence, body, { headers: this.headers });
  }

  updateAbsence(id: string, body) {
    return this.http.put(this.apiUrlAbsence + id, body, { headers: this.headers });
  }

  deleteAbsence(id: string) {
    return this.http.delete(this.apiUrlAbsence + id, { headers: this.headers });
  }

  getAbsenceById(id: string): any {
    return this.http.get(this.apiUrlAbsence + id, { headers: this.headers });
  }

}
