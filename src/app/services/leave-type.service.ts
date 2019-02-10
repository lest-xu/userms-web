import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  private headers: HttpHeaders;
  private apiUrlLeaveType: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlLeaveType = this.dataService.getRootUrl() + 'leaveTypes/';
  }

  /// ***********************[LeaveType]***********************
  getLeaveTypes(): Observable<any> {
    return this.http.get(this.apiUrlLeaveType, { headers: this.headers });
  }

  insertLeaveType(body) {
    return this.http.post(this.apiUrlLeaveType, body, { headers: this.headers });
  }

  updateLeaveType(id: string, body) {
    return this.http.put(this.apiUrlLeaveType + id, body, { headers: this.headers });
  }

  deleteLeaveType(id: string) {
    return this.http.delete(this.apiUrlLeaveType + id, { headers: this.headers });
  }

  getLeaveTypeById(id: string): any {
    return this.http.get(this.apiUrlLeaveType + id, { headers: this.headers });
  }

}
