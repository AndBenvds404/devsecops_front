import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'angular-web',
          clientId: 'angular-web-cliente'
        }
        ,
         initOptions: {
        //   onLoad: 'check-sso',
        //   silentCheckSsoRedirectUri:
        //     window.location.origin + '/assets/silent-check-sso.html'
            checkLoginIframe:true,
            checkLoginIframeInterval:25
        
    }
      });
  }