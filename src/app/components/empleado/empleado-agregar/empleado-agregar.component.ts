import { Component } from '@angular/core';

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

  ngOnInit() {
    this.listDepartamentos = Array.from({ length: 10 }).map((_, i) => `Departamento ${i+1}`);
  }

  listDepartamentos!: string[];


  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

  seleccionarDepartamento(departamento:any){
    //se agrega el departamento seleccionado al empleado
    console.log("agregando departamento a empleado");
    
  }

}