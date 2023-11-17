import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class EmpleadoServicios {

  private apiUrl = 'http://localhost:8081/empleados';

  constructor(private http: HttpClient) {}

  public obtenerEmpleados():Observable<any> {
    return this.http.get<any>(this.apiUrl);

  }

  public IngresarEmpleado(body:object):Observable<any> {
    console.log(body)
    return this.http.post<any>(this.apiUrl, body);
  }
} 