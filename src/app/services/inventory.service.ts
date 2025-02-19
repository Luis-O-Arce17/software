import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// no funcionaba el comando ng server para comprobar si angular estaba bien instalado, reinstale y solucione el error
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'https://api.example.com/inventories';

  constructor(private http: HttpClient) { }

  getInventories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}