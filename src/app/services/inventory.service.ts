import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private headers: HttpHeaders;
  private apiUrlInventory: string;

  constructor(private http: HttpClient, private dataService: DataService) {
    this.headers = this.dataService.setHttpHeaders();
    this.apiUrlInventory = this.dataService.getRootUrl() + 'inventories/';
  }

  /// ***********************[Inventory]***********************
  getInventories(): Observable<any> {
    return this.http.get(this.apiUrlInventory, { headers: this.headers });
  }

  insertInventory(body) {
    return this.http.post(this.apiUrlInventory, body, { headers: this.headers });
  }

  updateInventory(id: string, body) {
    return this.http.put(this.apiUrlInventory + id, body, { headers: this.headers });
  }

  deleteInventory(id: string) {
    return this.http.delete(this.apiUrlInventory + id, { headers: this.headers });
  }

  getInventoryById(id: string): any {
    return this.http.get(this.apiUrlInventory + id, { headers: this.headers });
  }

}
