import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders;
  private apiUrlUsers: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlUsers = this.dataService.getRootUrl() + 'users/';
  }


  /// ***********************[users]***********************
  // getUsers(): Observable<any> {
  //   console.log(this.headers);
  //   return this.http.get(this.apiUrlUsers, { headers: this.headers });
  // }
  getUsers(): Observable<any> {
    const headers = this.dataService.setHttpHeaders();
    return this.http.get(this.apiUrlUsers, { headers: headers });
  }

  insertUser(body) {
    return this.http.post(this.apiUrlUsers, body, { headers: this.headers });
  }

  updateUser(id: string, body) {
    return this.http.put(this.apiUrlUsers + id, body, { headers: this.headers });
  }

  deleteUser(id: string) {
    return this.http.delete(this.apiUrlUsers + id, { headers: this.headers });
  }

  getUserById(id: string): any {
    return this.http.get(this.apiUrlUsers + id, { headers: this.headers });
  }
  /// ***********************[users]***********************
}
