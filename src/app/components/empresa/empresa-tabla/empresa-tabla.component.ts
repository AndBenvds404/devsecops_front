import { Component, OnInit } from '@angular/core';
import {EmpresaServicios}from '../../../services/empresa/empresa.service'


@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css']
})
export class EmpresaTablaComponent  implements OnInit{


  listaEmpresa: any[] = [];
  
  checked: boolean = true ;

  constructor(private serviceEmpresa:EmpresaServicios){

  }
  items!: string[];

  ngOnInit():void{
    this.listarEmpresas()
    this.items = Array.from({ length: 10 }).map((_, i) => `Departamento #${i}`);
    
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




  editarEmpresa(){

  }


  listarEmpresas(){
    this.serviceEmpresa.obtenerEmpresas().subscribe(lista=>{
      this.listaEmpresa = lista;
      console.log(this.listaEmpresa)
      console.log(this.empresas)
    })
  }

}


