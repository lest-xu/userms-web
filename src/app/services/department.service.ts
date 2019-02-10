import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private headers: HttpHeaders;
  private apiUrlDepartment: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlDepartment = this.dataService.getRootUrl() + 'departments/';
  }

  /// ***********************[Department]***********************
  getDepartments(): Observable<any> {
    return this.http.get(this.apiUrlDepartment, { headers: this.headers });
  }

  insertDepartment(body) {
    return this.http.post(this.apiUrlDepartment, body, { headers: this.headers });
  }

  updateDepartment(id: string, body) {
    return this.http.put(this.apiUrlDepartment + id, body, { headers: this.headers });
  }

  deleteDepartment(id: string) {
    return this.http.delete(this.apiUrlDepartment + id, { headers: this.headers });
  }

  getDepartmentById(id: string): any {
    return this.http.get(this.apiUrlDepartment + id, { headers: this.headers });
  }

}
