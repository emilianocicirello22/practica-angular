import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes: Routes = [

  {
    path: 'Menu',
    component: NavigationComponent
  },
  {
    path: 'ListarProvincias',
    component: ProvinciasComponent
  },
  {
    path: 'Presentacion',
    component: PresentacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
