import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private headers: HttpHeaders;
  private apiUrlAddress: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlAddress = this.dataService.getRootUrl() + 'addresses/';
  }

  /// ***********************[Address]***********************
  getAddresses(): Observable<any> {
    return this.http.get(this.apiUrlAddress, { headers: this.headers });
  }

  insertAddress(body) {
    return this.http.post(this.apiUrlAddress, body, { headers: this.headers });
  }

  updateAddress(id: string, body) {
    return this.http.put(this.apiUrlAddress + id, body, { headers: this.headers });
  }

  deleteAddress(id: string) {
    return this.http.delete(this.apiUrlAddress + id, { headers: this.headers });
  }

  getAddressById(id: string): any {
    return this.http.get(this.apiUrlAddress + id, { headers: this.headers });
  }

}
