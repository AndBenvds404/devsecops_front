import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class DepartamentoServicios {

  private apiUrl = 'http://localhost:8081/departamentos';

  constructor(private http: HttpClient) {}

  public obtenerDepartamentos():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  public IngresarDepartamento(body:object):Observable<any> {
    console.log(body)
    return this.http.post<any>(this.apiUrl, body);
  }

} 