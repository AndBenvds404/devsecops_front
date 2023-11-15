import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaTablaComponent } from './components/empresa/empresa-tabla/empresa-tabla.component';
import { DepartamentoTablaComponent } from './components/departamento/departamento-tabla/departamento-tabla.component';
import { EmpleadoTablaComponent } from './components/empleado/empleado-tabla/empleado-tabla.component';
import { MenuComponent } from './components/menu/menu.component';

import { AuthGuard } from './components/keycloak/app.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { EmpresaAgregarComponent } from './components/empresa/empresa-agregar/empresa-agregar.component';
import { DepartamentoAgregarComponent } from './components/departamento/departamento-agregar/departamento-agregar.component';
import { EmpleadoAgregarComponent } from './components/empleado/empleado-agregar/empleado-agregar.component';

const routes: Routes = [

  {path:'empresa_lista', component: EmpresaTablaComponent, canActivate:[AuthGuard]},
  {path:'empresa_agregar', component: EmpresaAgregarComponent, canActivate:[AuthGuard]},
  {path:'departamento_lista', component: DepartamentoTablaComponent, canActivate:[AuthGuard]},
  {path:'departamento_agregar', component: DepartamentoAgregarComponent, canActivate:[AuthGuard]},
  {path:'empleado_lista', component: EmpleadoTablaComponent,canActivate:[AuthGuard]},
  {path:'empleado_agregar', component: EmpleadoAgregarComponent,canActivate:[AuthGuard]},
  {path:'menu',component: MenuComponent},
  {path:'',component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
