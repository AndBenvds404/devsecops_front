import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmpresaServicios {
  
  private apiUrl = 'http://localhost:8081/empresas';

  constructor(private http: HttpClient) {}

  public obtenerEmpresas():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  public IngresarEmpresa(body:object):Observable<any> {
    console.log(body)
    return this.http.post<any>(this.apiUrl, body);
  }
} 