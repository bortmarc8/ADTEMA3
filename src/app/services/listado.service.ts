import { Injectable } from '@angular/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';

@Injectable()

export class ListadoProductos {

  productos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];

  getProductos() : Iproductos[]{
    return this.productos;
  }

  getProductoDetailed(id:number) : Iproductos{
    return this.productos[id-1];
  }
}
