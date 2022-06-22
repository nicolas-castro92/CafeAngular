import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'barra', component: BarrasComponent},
      {path:'**',redirectTo:'barra'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
