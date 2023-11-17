import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { EmpresaTablaComponent } from './components/empresa/empresa-tabla/empresa-tabla.component';
import { EmpresaEditarComponent } from './components/empresa/empresa-editar/empresa-editar.component';
import { EmpresaAgregarComponent } from './components/empresa/empresa-agregar/empresa-agregar.component';
import { DepartamentoAgregarComponent } from './components/departamento/departamento-agregar/departamento-agregar.component';
import { DepartamentoEditarComponent } from './components/departamento/departamento-editar/departamento-editar.component';
import { DepartamentoTablaComponent } from './components/departamento/departamento-tabla/departamento-tabla.component';
import { EmpleadoTablaComponent } from './components/empleado/empleado-tabla/empleado-tabla.component';
import { EmpleadoAgregarComponent } from './components/empleado/empleado-agregar/empleado-agregar.component';
import { EmpleadoEditarComponent } from './components/empleado/empleado-editar/empleado-editar.component';
//primeFaces
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuComponent } from './components/menu/menu.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {initializeKeycloak} from './components/keycloak/app.keycloak-init';
import { InicioComponent } from './components/inicio/inicio.component'
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaTablaComponent,
    EmpresaEditarComponent,
    EmpresaAgregarComponent,
    DepartamentoAgregarComponent,
    DepartamentoEditarComponent,
    DepartamentoTablaComponent,
    EmpleadoTablaComponent,
    EmpleadoAgregarComponent,
    EmpleadoEditarComponent,
    MenuComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    InputSwitchModule,
    DialogModule,
    KeycloakAngularModule,
    HttpClientModule,
    AutoCompleteModule,
    InputTextModule,
    FormsModule,
    DropdownModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
