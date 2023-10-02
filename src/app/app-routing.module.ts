import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaTablaComponent } from './components/empresa/empresa-tabla/empresa-tabla.component';
import { DepartamentoTablaComponent } from './components/departamento/departamento-tabla/departamento-tabla.component';
import { EmpleadoTablaComponent } from './components/empleado/empleado-tabla/empleado-tabla.component';

const routes: Routes = [

  {path:'empresa_lista', component: EmpresaTablaComponent},
  {path:'departamento_lista', component: DepartamentoTablaComponent},
  {path:'empleado_lista', component: EmpleadoTablaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
