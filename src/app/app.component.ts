import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { KeycloakService } from "keycloak-angular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  title = 'devsecops_front';
  isAuthenticated: boolean = false;
  userFullName: string = ''; 

  constructor( private router: Router, private keycloak:KeycloakService ){
    
  }


  ngOnInit() {
    
    this.keycloak.isLoggedIn().then((loggedIn: boolean) => {
      this.isAuthenticated = loggedIn;
    });

    const storedUserFullName = localStorage.getItem('userFullName');
    if (storedUserFullName) {
      this.userFullName = storedUserFullName;
    } else {
      this.keycloak.loadUserProfile().then((profile) => {
        this.userFullName = profile.firstName + ' ' + profile.lastName;
        localStorage.setItem('userFullName', this.userFullName);
      }).catch((error) => {
        console.error('Error al cargar el perfil del usuario:', error);
      });
    }
  }
 
  toggleAuthentication() {
    if (this.isAuthenticated) {
      // Si el usuario está autenticado, realiza el cierre de sesión
      this.keycloak.logout("http://localhost:4200").then(() => {
        this.isAuthenticated = false; // Actualiza el estado de autenticación
       
      });
    } else {
      // Si el usuario no está autenticado, realiza el inicio de sesión
      this.keycloak.login({redirectUri:"http://localhost:4200/menu"}).then(() => {
        this.isAuthenticated = true; // Actualiza el estado de autenticación
      });
    }
  }


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

  

}

