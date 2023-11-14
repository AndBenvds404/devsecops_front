import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaTablaComponent } from './components/empresa/empresa-tabla/empresa-tabla.component';
import { DepartamentoTablaComponent } from './components/departamento/departamento-tabla/departamento-tabla.component';
import { EmpleadoTablaComponent } from './components/empleado/empleado-tabla/empleado-tabla.component';
import { MenuComponent } from './components/menu/menu.component';

import { AuthGuard } from './components/keycloak/app.guard';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [

  {path:'empresa_lista', component: EmpresaTablaComponent, canActivate:[AuthGuard]},
  {path:'departamento_lista', component: DepartamentoTablaComponent, canActivate:[AuthGuard]},
  {path:'empleado_lista', component: EmpleadoTablaComponent,canActivate:[AuthGuard]},
  {path:'menu',component: MenuComponent},
  {path:'',component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
