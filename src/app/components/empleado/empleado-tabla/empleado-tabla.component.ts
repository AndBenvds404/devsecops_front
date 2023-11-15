import { Component, OnInit } from '@angular/core';
import { EmpleadoServicios } from 'src/app/services/empleado/empleado.service';


@Component({
  selector: 'app-empleado-tabla',
  templateUrl: './empleado-tabla.component.html',
  styleUrls: ['./empleado-tabla.component.css']
})
export class EmpleadoTablaComponent implements OnInit{

  checked: boolean = false;
  listaEmpleado: any[]=[];
  
  constructor(private serviceEmpleado:EmpleadoServicios){}

  ngOnInit(): void {
    this.listarEmpleados()    
  }

  empresas = [
    { id: 1, nombre: 'Empleado 1', 
      estado: 'activo', 
      direcion:'Av aaaa y calle bbb',
      telefono:'0999999', 
      departamento:{nombre:'departamento1',
                    descripcion:'esto es una descripcion'
                    }
    },    
    { id: 2, nombre: 'Empleado 2', 
    estado: 'activo', 
    direcion:'Av xxxxx y calle ssss',
    telefono:'099994444', 
    departamento:{nombre:'departamento2',
                  descripcion:'esto es una descripcion'
                  }
  },
    
    // ... más objetos de productos
  ];


  listarEmpleados(){
    this.serviceEmpleado.obtenerEmpleados().subscribe(lista=>{
      this.listaEmpleado = lista

    })
    
  }
  
}


