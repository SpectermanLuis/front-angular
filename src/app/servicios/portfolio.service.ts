import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
// el primer http se llama alias 
constructor(private http:HttpClient) { }

getDatos():Observable<any>{
  // llama al json desde una ruta o desde una url
  return this.http.get('./assets/json/datos.json');
}
}
