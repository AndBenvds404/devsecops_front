import { Component } from '@angular/core';
import { EmpresaServicios } from 'src/app/services/empresa/empresa.service';
import { KeycloakService } from "keycloak-angular";

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-empresa-agregar',
  templateUrl: './empresa-agregar.component.html',
  styleUrls: ['./empresa-agregar.component.css']
})
export class EmpresaAgregarComponent {

  constructor(private service:EmpresaServicios, private keycloak:KeycloakService){}
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;
  
  empresa:any={
      nombre:"",
      telefono:"",
      direccion:"",	
		creadoPor: localStorage.getItem('userFullName'),
		modificadoPor: "sin modificación",
		fechaModificado: "2000-01-01",
		estado: true,

  }

  public guardarEmpresa(){
    console.log(this.empresa)
    this.service.IngresarEmpresa(this.empresa).subscribe(
      (response) => {
        console.log('Éxito al guardar la empresa', response);
        // Realiza cualquier lógica adicional después de guardar la empresa
      },
      (error) => {
        console.error('Error al guardar la empresa', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }

 
}