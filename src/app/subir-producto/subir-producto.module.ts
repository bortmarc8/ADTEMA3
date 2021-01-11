import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirProductoPageRoutingModule } from './subir-producto-routing.module';

import { SubirProductoPage } from './subir-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirProductoPageRoutingModule
  ],
  declarations: [SubirProductoPage]
})
export class SubirProductoPageModule {}
