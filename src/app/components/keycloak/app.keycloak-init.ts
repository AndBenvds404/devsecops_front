import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    window.onload = () => {
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'angular-web',
          clientId: 'angular-web-cliente'
        },
        initOptions: {
          onLoad: 'check-sso'
        }
      });
    };
  };
}