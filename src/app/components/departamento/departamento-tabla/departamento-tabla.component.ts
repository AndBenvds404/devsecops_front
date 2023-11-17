import { Component, OnInit } from '@angular/core';
import { DepartamentoServicios } from 'src/app/services/departamento/departamento.service';


@Component({
  selector: 'app-departamento-tabla',
  templateUrl: './departamento-tabla.component.html',
  styleUrls: ['./departamento-tabla.component.css']
})
export class DepartamentoTablaComponent implements OnInit{

  checked: boolean = false;

  constructor(private serviceDepartamento:DepartamentoServicios){}
  listaDepartamento: any[]=[]

  ngOnInit(): void {

    this.listarDepartamentos()
  }

  empresas = [
    { id: 1, nombre: 'Departamento 1', 
      estado: 'activo', 
      direcion:'Av aaaa y calle bbb',
      telefono:'0999999', 
      departamento:{nombre:'departamento1',
                    descripcion:'esto es una descripcion'
                    }
    },    
    { id: 2, nombre: 'Departamento 2', 
    estado: 'activo', 
    direcion:'Av xxxxx y calle ssss',
    telefono:'099994444', 
    departamento:{nombre:'departamento2',
                  descripcion:'esto es una descripcion'
                  }
  },
    
    // ... más objetos de productos
  ];

 listarDepartamentos(){
    this.serviceDepartamento.obtenerDepartamentos().subscribe(lista=>{
      this.listaDepartamento = lista

    })

  }
}