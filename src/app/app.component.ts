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
  loged: boolean = false
  userFullName: string = ''; 

  constructor( private router: Router, public keycloak:KeycloakService ){

  }




  async ngOnInit() {
    const storedUserFullName = localStorage.getItem('userFullName');
    console.log(storedUserFullName)
    
      this.loged = await this.keycloak.isLoggedIn();
      console.log(this.loged); // Imprime true o false
    
    
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

    this.keycloak.isLoggedIn()
      .then((loggedIn: boolean) => {
        if (loggedIn) {
          // Si el usuario está autenticado, realiza el cierre de sesión
          this.keycloak.logout()
            .then(() => {
              // Actualiza el estado de autenticación
              
            })
            .catch((error) => {
              console.error('Error al cerrar sesión:', error);
            });

            this.keycloak.isLoggedIn().then((loggedIn: boolean) => {
              console.log(loggedIn); // Imprime true o false
            });
            this.loged = false
            
        } else {
          // Si el usuario no está autenticado, realiza el inicio de sesión
          this.keycloak.login()
            .then(() => {
              // Actualiza el estado de autenticación
              
            })
            .catch((error) => {
              console.error('Error al iniciar sesión:', error);
            });
           
                 this.keycloak.isLoggedIn().then((loggedIn: boolean) => {
              console.log(loggedIn); // Imprime true o false
            });
        }  this.loged = true
      })
      .catch((error) => {
        console.error('Error al verificar la autenticación:', error);
      });
    
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

