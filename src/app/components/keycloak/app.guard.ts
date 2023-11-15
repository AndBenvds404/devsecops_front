      import { Injectable } from '@angular/core';
      import {
        ActivatedRouteSnapshot,
        Router,
        RouterStateSnapshot
      } from '@angular/router';
      import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

      @Injectable({
        providedIn: 'root'
      })
      export class AuthGuard extends KeycloakAuthGuard {
        constructor(
          protected override readonly router: Router,
          protected readonly keycloak: KeycloakService
        ) {
          super(router, keycloak);
        }


        public async isAccessAllowed(
          route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
        ) {
          // Obliga al usuario a iniciar sesión si actualmente no está autenticado.
          if (!this.authenticated) {
            await this.keycloak.login({
              redirectUri: window.location.origin + state.url
            }); Promise<boolean>
          }
          // Obtener los roles requeridos de la ruta, en caso de existir.
          const requiredRoles = route.data['roles'];

          // Permite que el usuario continúe si no se requieren roles adicionales para acceder a la ruta.
          if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
            return true;
          }

          // Permitr que el usuario continúe si todos los roles requeridos están presentes.
          return requiredRoles.every((role) => this.roles.includes(role));
        }
      }