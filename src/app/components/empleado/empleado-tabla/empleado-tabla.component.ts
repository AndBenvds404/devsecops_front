import { Component, OnInit } from '@angular/core';
import { EmpleadoServicios } from 'src/app/services/empleado/empleado.service';


@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent implements OnInit{

  checked: boolean = false;
  listaEmpleados: any[]=[];
  items!: string[];
  constructor(private serviceEmpleado:EmpleadoServicios){}

  ngOnInit(): void {
    this.listarEmpleados()    
    this.items = Array.from({ length: 10 }).map((_, i) => `Departamento #${i}`);
    
  }



  listarEmpleados(){
    this.serviceEmpleado.obtenerEmpleados().subscribe(lista=>{
      this.listaEmpleados = lista
      console.log(this.listaEmpleados)
    })
  }

  editarEmpleado(){

  }

}