import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EmpresaServicios {


  constructor(private http: HttpClient) {}

 

  public obtenerDatos():Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
  
  private apiUrl = 'http://localhost:8081/empresas';

  public enviarDatos(empresa:object):Observable<any> {
    return this.http.post<any>(this.apiUrl,empresa)
  }
} 