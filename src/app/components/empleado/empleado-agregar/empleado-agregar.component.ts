import { Component } from '@angular/core';
import { KeycloakService } from "keycloak-angular";
import { EmpleadoServicios } from 'src/app/services/empleado/empleado.service';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-empleado-agregar',
  templateUrl: './empleado-agregar.component.html',
  styleUrls: ['./empleado-agregar.component.css']
})
export class EmpleadoAgregarComponent {

  constructor(private service:EmpleadoServicios, private keycloak:KeycloakService){}

  ngOnInit() {
    this.listDepartamentos = Array.from({ length: 10 }).map((_, i) => `Departamento ${i+1}`);
  }

    empleado:any={
      creadoPor: localStorage.getItem('userFullName'),
      modificadoPor: "",
      fechaCreado: "2012-09-09",
      fechaModificado: "2000-01-01",
      estado: true,
      edad: undefined,
      correo: "",
      nombre: "",
      posicion: "",
      apellido: ""

  }
  
  listDepartamentos!: string[];


  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;



  seleccionarDepartamento(departamento:any){
    //se agrega el departamento seleccionado al empleado
    console.log("agregando departamento a empleado");
    
  }

  public guardarEmpleado(){
    console.log(this.empleado)
    this.service.IngresarEmpleado(this.empleado).subscribe(
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


  editarEmpleado(){
    
  }



}