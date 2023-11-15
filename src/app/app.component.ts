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


  async ngOnInit() {
    try {
      this.isAuthenticated = await this.keycloak.isLoggedIn();
  
      if (this.isAuthenticated) {
        try {
          const profile = await this.keycloak.loadUserProfile();
          this.userFullName = `${profile.firstName} ${profile.lastName}`;
          localStorage.setItem('userFullName', this.userFullName);
        } catch (error) {
          console.error('Error al cargar el perfil del usuario:', error);
        }
      }
    } catch (error) {
      console.error('Error al verificar la autenticación:', error);
    }
  }
  
 
  toggleAuthentication() {
    if (this.isAuthenticated) {
      // Cerrar sesión
      this.keycloak.logout().then(
        () => {
          this.isAuthenticated = false;
          console.log('Sesión cerrada exitosamente.');
        },
        (error) => {
          console.error('Error al cerrar sesión:', error);
        }
      );
    } else {
      // Iniciar sesión
      this.keycloak.login().then(
        () => {
          this.isAuthenticated = true;
          console.log('Inicio de sesión exitoso.');
          // Puedes llamar a loadUserProfile aquí si necesitas cargar el perfil después del inicio de sesión
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
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

