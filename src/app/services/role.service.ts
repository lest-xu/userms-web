import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private headers: HttpHeaders;
  private apiUrlRole: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlRole = this.dataService.getRootUrl() + 'roles/';
  }

  /// ***********************[Role]***********************
  getRoles(): Observable<any> {
    return this.http.get(this.apiUrlRole, { headers: this.headers });
  }

  insertRole(body) {
    return this.http.post(this.apiUrlRole, body, { headers: this.headers });
  }

  updateRole(id: string, body) {
    return this.http.put(this.apiUrlRole + id, body, { headers: this.headers });
  }

  deleteRole(id: string) {
    return this.http.delete(this.apiUrlRole + id, { headers: this.headers });
  }

  getRoleById(id: string): any {
    return this.http.get(this.apiUrlRole + id, { headers: this.headers });
  }

}
