import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirProductoPage } from './subir-producto.page';

const routes: Routes = [
  {
    path: '',
    component: SubirProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirProductoPageRoutingModule {}
