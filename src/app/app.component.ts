import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'devsecops_front';
  
  constructor( private router: Router){}

  //rutas barra later
  listarEmpresas(){
    this.router.navigate(["empresa_lista"])   ;
  }

  listarDepartamento(){
    this.router.navigate(["departamento_lista"])   ;
  }

  listarEmpleado(){
    this.router.navigate(["empleado_lista"])   ;
  }

  inicio(){
    this.router.navigate([""]);
  }



  sidebarVisible: boolean = false;

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}

