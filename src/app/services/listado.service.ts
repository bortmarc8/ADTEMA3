import { Injectable } from '@angular/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ListadoProductos {

  constructor(private _db : AngularFireDatabase) {}

  async setProducto(producto : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor) {
    const ref = this._db.database.ref("Productos");
    ref.push(producto);
  }

  getProductos() : firebase.database.Reference {
    return this._db.database.ref("Productos");
  }

  getProductoDetailed(id : string) : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor {
    let producto : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor;
    const ref = this._db.database.ref("Productos/"+id).on('value', child => {
      if (child.val().categoria == 'Tecnología') {
        producto =
          {
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio,
            "estado" : child.val().estado
          }
      } else if (child.val().categoria == 'Motor'){
        producto =
          {
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio,
            "tipo" : child.val().tipo,
            "kilometros" : child.val().kilometros,
            "anyo" : child.val().anyo.substring(0,4)
          }
      } else if (child.val().categoria == 'Inmobiliaria'){
        producto =
          {
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio,
            "metrosCuadrados" : child.val().metrosCuadrados,
            "banyos" : child.val().banyos,
            "habitaciones" : child.val().habitaciones,
            "localidad" : child.val().localidad
          }
      }else{
        producto =
          {
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio
          }
      }
    });


    return producto;
  }

}
