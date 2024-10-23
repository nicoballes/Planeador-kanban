import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://proyectos.siesaecommerce.com/webservices/custom_function/kanbanPostventaGetAccounts/?analista=63696c79ad146ee2bef76fd37fed079fec67daa9&filter_rq=all';

  constructor(private http: HttpClient) {}
  
  // función para obtener todos los requerimientos de posventa
  getRequerimientosPosventa(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
 
  
}