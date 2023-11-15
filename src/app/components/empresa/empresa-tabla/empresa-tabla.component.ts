import { Component, OnInit } from '@angular/core';
import {EmpresaServicios}from '../../../services/empresa/empresa.service'


@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css']
})
export class EmpresaTablaComponent  implements OnInit{


  listaEmpresa: any[] = [];
  
  checked: boolean = false;

  constructor(private serviceEmpresa:EmpresaServicios){

  }

  ngOnInit():void{
    this.listarEmpresas()
  }

  empresas = [
    { id: 1, nombre: 'Empresa 1', 
      estado: 'activo', 
      direccion:'Av aaaa y calle bbb',
      telefono:'0999999', 
      departamento:[{nombre:'departamento1',
                    descripcion:'esto es una descripcion'
                    }]
    },    
    { id: 2, nombre: 'Empresa 2', 
    estado: 'activo', 
    direccion:'Av xxxxx y calle ssss',
    telefono:'099994444', 
    departamento:[{nombre:'departamento2',
                  descripcion:'esto es una descripcion'
                  },{nombre:'departamento2',
                  descripcion:'esto es una descripcion'
                  }]
  },
    
    // ... más objetos de productos
  ];






  listarEmpresas(){
    this.serviceEmpresa.obtenerEmpresas().subscribe(lista=>{
      this.listaEmpresa = lista;
      console.log(this.listaEmpresa)
    })
  }

}


